from user.v1 import user_pb2
from user.v1 import user_pb2_grpc
from orders_service_client import OrdersServiceClient

user = user_pb2.User

users = [
    user(id=1, first_name="Petar", last_name="Petrovic", email="petar.petrovic@gmail.com", orders=[]),
    user(id=2, first_name="Jovan", last_name="Jovanovic", email="jovan.jovanovic@gmail.com", orders=[]),
    user(id=3, first_name="Jovica", last_name="Jovic", email="jovica.jovic@gmail.com", orders=[]),
]


class NotFoundException(Exception):
    pass


class UserService(user_pb2_grpc.UserServiceServicer):

    def __init__(self) -> None:
        super().__init__()

        self.orders_client = OrdersServiceClient()

    def GetUserById(self, request, context):
        print("GET user by id request", str(request.id))
        user_by_id = list(filter(lambda u: u.id == request.id, users))[0]

        if user_by_id:
            try:
                orders_response = self.orders_client.get_orders_by_user_id(id=request.id)

                # Need to reinitialize an array of orders since no real database is used, and on every subsequent call orders
                # are appended to the array
                if len(user_by_id.orders) > 0:
                    del user_by_id.orders[:]

                user_by_id.orders.extend(orders_response.orders)
            except Exception as e:
                raise NotFoundException(f'An error occurred {e}')

            return user_pb2.GetUserResponse(user=user_by_id)
        else:
            raise NotFoundException(f'User with ID: {request.id} not found!')

    def GetAllUsers(self, request, context):
        print("GET all users")

        return user_pb2.GetAllUsersResponse(users=users)
