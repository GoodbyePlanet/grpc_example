package org.order.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import com.google.protobuf.Timestamp;

import orders.v1.Item;
import orders.v1.Order;

public class OrderRepository {
    private static final Logger logger = Logger.getLogger(OrderRepository.class.getName());

    private Connection dbConnection;

    public OrderRepository(Connection dbConnection) {
        this.dbConnection = dbConnection;
    }

    // TODO: Use hibernate
    public List<Order> getOrdersByUserId(int userId) {
        List<Order> ordersList = new ArrayList<>();

        try {
            String sql = "SELECT o.id, o.user_id, o.order_date, o.amount, i.id as item_id, i.name as item_name " +
                "FROM orders o " +
                "JOIN item i ON o.item_id = i.id " +
                "WHERE o.user_id = ?";

            PreparedStatement statement = dbConnection.prepareStatement(sql);
            statement.setInt(1, userId);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                int order_id = rs.getInt("id");
                int user_id = rs.getInt("user_id");
                Date order_date = rs.getDate("order_date");
                int amount = rs.getInt("amount");
                int item_id = rs.getInt("item_id");
                String item_name = rs.getString("item_name");

                ordersList.add(Order.newBuilder().setId(order_id).setUserId(user_id)
                    .setItem(Item.newBuilder().setId(item_id).setName(item_name).build())
                    .setOrderDate(Timestamp.newBuilder().setSeconds(order_date.getTime()).setNanos((int) order_date.getTime())
                        .build()).setAmount(amount).build());
            }

            statement.close();
            rs.close();

            return ordersList;
        } catch (SQLException e) {
            logger.severe("Failed to execute query.");
            e.printStackTrace();
            return Collections.emptyList();
        }
    }

}
