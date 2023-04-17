import grpc

from orders.v1 import order_pb2
from orders.v1 import order_pb2_grpc


class OrdersServiceClient:

    def __init__(self) -> None:
        self.host = "localhost"
        self.server_port = 50052

        self.channel = grpc.insecure_channel('{}:{}'.format(self.host, self.server_port))

        # bind the client and the server
        self.stub = order_pb2_grpc.OrderServiceStub(self.channel)

    def get_orders_by_user_id(self, id):
        order_request = order_pb2.OrdersByUserIdRequest(user_id=id)
        print(f'Order request {order_request}')

        orders_response = self.stub.GetOrdersByUserId(order_request)

        return orders_response
