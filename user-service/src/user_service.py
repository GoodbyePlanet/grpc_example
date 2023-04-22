from collections import namedtuple

from orders_service_client import OrdersServiceClient
from user.v1 import user_pb2
from user.v1 import user_pb2_grpc
from user_repository import UserRepository

User = namedtuple("User", ["id", "fist_name", "last_name", "email"])


class NotFoundException(Exception):
    pass


class UserService(user_pb2_grpc.UserServiceServicer):

    def __init__(self, db_connection) -> None:
        super().__init__()

        self.orders_client = OrdersServiceClient()
        self.user_repository = UserRepository(db_connection)

    def GetUserById(self, request, context):
        print("GET user by id request", str(request.id))

        user_by_id = User._make(self.user_repository.get_by_id(request.id))

        if user_by_id:
            try:
                orders_response = self.orders_client.get_orders_by_user_id(id=request.id)

                user_by_id_response = user_pb2.User(id=user_by_id.id, first_name=user_by_id.fist_name,
                                                    last_name=user_by_id.last_name,
                                                    email=user_by_id.email, orders=[])
                user_by_id_response.orders.extend(orders_response.orders)
            except Exception as e:
                raise NotFoundException(f'An error occurred {e}')

            return user_pb2.GetUserResponse(user=user_by_id_response)
        else:
            raise NotFoundException(f'User with ID: {request.id} not found!')

    def GetAllUsers(self, request, context):
        print("GET all users")

        users_from_db = self.user_repository.get_all()
        users = [User(*user) for user in users_from_db]

        # TODO: Get orders for each user and append it to the list
        proto_users = [user_pb2.User(id=u.id, first_name=u.fist_name, last_name=u.last_name, email=u.email) for u in users]

        return user_pb2.GetAllUsersResponse(users=proto_users)
