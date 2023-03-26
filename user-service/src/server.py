from concurrent import futures

import grpc


import user_pb2
import user_pb2_grpc


user = user_pb2.User

users = [
   user(id=1, first_name="Petar", last_name="Petrovic", email="petar.petrovic@gmail.com"),
   user(id=2, first_name="Jovan", last_name="Jovanovic", email="jovan.jovanovic@gmail.com"),
   user(id=3, first_name="Jovica", last_name="Jovic", email="jovica.jovic@gmail.com"),
]


class NotFoundException(Exception):
    pass


class UserService(user_pb2_grpc.UserServiceServicer):
    def GetUserByEmail(self, request, context):
        print("Getting user by email request", str(request.email))
        filtered_users = list(filter(lambda u: u.email == request.email, users))

        if filtered_users:
            return user_pb2.GetUserResponse(user=filtered_users[0])
        else:
            raise NotFoundException(f'User with email: {request.email} not found')

    def GetAllUsers(self, request, context):
        print("Getting all users")

        return user_pb2.GetAllUsersResponse(users=users)


def server():
    user_server = grpc.server(futures.ThreadPoolExecutor(max_workers=2))
    user_pb2_grpc.add_UserServiceServicer_to_server(UserService(), user_server)
    user_server.add_insecure_port('127.0.0.1:50051')
    print("gRPC User Service starting")
    user_server.start()
    user_server.wait_for_termination()


if __name__ == "__main__":
    server()
