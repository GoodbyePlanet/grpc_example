package org.order.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Logger;

public class DatabaseConnection {
    private static final Logger logger = Logger.getLogger(DatabaseConnection.class.getName());

    private static Connection connection;

    public static Connection getConnection() {
        if (connection == null) {
            try {
                Class.forName("org.postgresql.Driver");
                connection = DriverManager.getConnection("jdbc:postgresql://localhost:5431/postgres", "postgres", "postgres");
                logger.info("Database connection successfully established!");
            } catch (ClassNotFoundException e) {
                logger.severe("PostgreSQL JDBC driver not found!");
                e.printStackTrace();
                return null;
            } catch (SQLException e) {
                logger.severe("Failed to connect to PostgreSQL database!");
                e.printStackTrace();
                return null;
            }
        }
        return connection;
    }
}
