package org.order.service;

import java.io.IOException;
import java.security.InvalidParameterException;
import java.sql.Connection;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;
import orders.v1.Order;
import orders.v1.OrderServiceGrpc.OrderServiceImplBase;
import orders.v1.OrdersByUserIdRequest;
import orders.v1.OrdersByUserIdResponse;

public class OrderService {
    private static final Logger logger = Logger.getLogger(OrderService.class.getName());

    Server server;

    private static final Connection dbConnection = DatabaseConnection.getConnection();

    private static OrderRepository orderRepository = new OrderRepository(dbConnection);

    private void start() throws IOException {
        int port = 50052;
        server = ServerBuilder.forPort(port).addService(new OrderServiceImpl()).build().start();

        logger.info("Server started, listening on " + port);

        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            System.err.println("Shutting down gRPC server");
            try {
                server.shutdown().awaitTermination(30, TimeUnit.SECONDS);
            } catch (InterruptedException e) {
                e.printStackTrace(System.err);
            }
        }));
    }

    static class OrderServiceImpl extends OrderServiceImplBase {

        private Iterable<Order> ordersByUserId(int userId) {
            logger.info("Getting orders by user id " + userId);
            List<Order> orders = orderRepository.getOrdersByUserId(userId);

            return () -> orders.stream().iterator();
        }

        @Override
        public void getOrdersByUserId(OrdersByUserIdRequest request, StreamObserver<OrdersByUserIdResponse> responseObserver) {
            logger.info("Get orders by user id " + request);
            var userId = request.getUserId();

            if (userId <= 0) {
                logger.log(Level.SEVERE, "Request contain invalid user ID!");

                throw new InvalidParameterException("Request must contain valid user ID.");
            }

            OrdersByUserIdResponse response = OrdersByUserIdResponse.newBuilder()
                .addAllOrders(ordersByUserId(userId))
                .build();
            responseObserver.onNext(response);
            responseObserver.onCompleted();
        }
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        OrderService orderService = new OrderService();

        if (dbConnection != null) {
            orderService.start();
            orderService.server.awaitTermination();
        }
    }
}
