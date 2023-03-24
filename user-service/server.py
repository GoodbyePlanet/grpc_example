from concurrent import futures

import grpc


import user_pb2
import user_pb2_grpc


class UserService(user_pb2_grpc.UserServiceServicer):
    def GetUserByEmail(self, request, context):
        print("Getting user by email request", str(request))

        user = user_pb2.User()
        user.id = 1
        user.first_name = "John"
        user.last_name = "Doe"
        user.email = "john.doe@gmail.com"

        return user_pb2.GetUserResponse(user=user)


def server():
    user_server = grpc.server(futures.ThreadPoolExecutor(max_workers=2))
    user_pb2_grpc.add_UserServiceServicer_to_server(UserService(), user_server)
    user_server.add_insecure_port('127.0.0.1:50051')
    print("gRPC User Service starting")
    user_server.start()
    user_server.wait_for_termination()


if __name__ == "__main__":
    server()
