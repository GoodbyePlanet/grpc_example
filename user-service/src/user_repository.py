# noinspection SqlNoDataSourceInspection
class UserRepository:

    def __init__(self, db_connection) -> None:
        self.db_connection = db_connection

    def get_all(self):
        cur = self.db_connection.cursor()
        cur.execute("SELECT * FROM users")

        db_users = cur.fetchall()
        cur.close()

        return db_users

    def get_by_id(self, user_id):
        cur = self.db_connection.cursor()
        cur.execute("SELECT * FROM users WHERE id = %s", (user_id,))

        user_by_id = cur.fetchone()
        cur.close()

        return user_by_id
