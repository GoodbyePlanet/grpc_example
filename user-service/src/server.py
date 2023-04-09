from concurrent import futures

import grpc


import user_pb2
import user_pb2_grpc
import order_pb2_grpc
import order_pb2

user = user_pb2.User

users = [
   user(id=1, first_name="Petar", last_name="Petrovic", email="petar.petrovic@gmail.com"),
   user(id=2, first_name="Jovan", last_name="Jovanovic", email="jovan.jovanovic@gmail.com"),
   user(id=3, first_name="Jovica", last_name="Jovic", email="jovica.jovic@gmail.com"),
]


class NotFoundException(Exception):
    pass


class OrdersServiceClient():

    def __init__(self) -> None:
        self.host = "localhost"
        self.server_port = 50052

        self.channel = grpc.insecure_channel('{}:{}'.format(self.host, self.server_port))

        # bind the clinet and the server
        self.stub = order_pb2_grpc.OrderServiceStub(self.channel)

    def get_orders_by_user_id(self, id):
        order_request = order_pb2.OrdersByUserIdRequest(user_id=id)
        print(f'ORDER REQUEST: {order_request}')

        orders_response = self.stub.GetOrdersByUserId(order_request)

        return orders_response




class UserService(user_pb2_grpc.UserServiceServicer):

    def __init__(self) -> None:
        super().__init__()

        self.orders_client = OrdersServiceClient()

    def GetUserById(self, request, context):
        print("Getting user by id request", str(request.id))
        filtered_users = list(filter(lambda u: u.id == request.id, users))

        if filtered_users:
            orders = self.orders_client.get_orders_by_user_id(id=request.id)
            print(f'ORDERS: {orders}')

            return user_pb2.GetUserResponse(user=filtered_users[0])
        else:
            raise NotFoundException(f'User with id: {request.id} not found')

    def GetAllUsers(self, request, context):
        print("Getting all users")

        return user_pb2.GetAllUsersResponse(users=users)


def server():
    user_server = grpc.server(futures.ThreadPoolExecutor(max_workers=2))
    user_pb2_grpc.add_UserServiceServicer_to_server(UserService(), user_server)
    port = 50051
    user_server.add_insecure_port(f'127.0.0.1:{port}')

    print(f'gRPC User Service running at http://127.0.0.1:{port}')

    user_server.start()
    user_server.wait_for_termination()


if __name__ == "__main__":
    server()
