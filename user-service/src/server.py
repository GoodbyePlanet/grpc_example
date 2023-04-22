from concurrent import futures

import grpc
import psycopg2
from psycopg2 import OperationalError

from user.v1 import user_pb2_grpc
from user_service import UserService


def get_db_connection():
    print("Connecting to database...")
    db_connection = None
    try:
        db_connection = psycopg2.connect(
            host="0.0.0.0",
            database="postgres",
            user="postgres",
            password="postgres",
            port=5432
        )
    except OperationalError as error:
        print(f'An error occurred while connection to the database {error}')

    return db_connection


def run_server():
    db_connection = get_db_connection()

    if db_connection:
        print("Connected to the database")

    user_server = grpc.server(futures.ThreadPoolExecutor(max_workers=2))
    user_pb2_grpc.add_UserServiceServicer_to_server(UserService(db_connection), user_server)
    port = 50051
    user_server.add_insecure_port(f'127.0.0.1:{port}')

    print(f'gRPC User Service running at http://127.0.0.1:{port}')

    user_server.start()
    user_server.wait_for_termination()


if __name__ == "__main__":
    run_server()
