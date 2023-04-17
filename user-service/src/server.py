from concurrent import futures

import grpc

from user.v1 import user_pb2_grpc
from user_service import UserService


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
