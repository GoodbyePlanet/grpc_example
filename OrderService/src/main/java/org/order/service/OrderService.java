package org.order.service;

import java.io.IOException;
import java.security.InvalidParameterException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.protobuf.Timestamp;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;
import orders.v1.Order;
import orders.v1.OrderServiceGrpc.OrderServiceImplBase;
import orders.v1.OrdersByUserIdRequest;
import orders.v1.OrdersByUserIdResponse;

public class OrderService {
    private static final Logger logger = Logger.getLogger(OrderService.class.getName());

    private Server server;

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

        private Timestamp getTimestamp() {
            return Timestamp.newBuilder()
                .setSeconds(System.currentTimeMillis() / 1000)
                .setNanos((int) ((System.currentTimeMillis() % 1000) * 1000000))
                .build();
        }

        private List<Order> orders() {
            List<Order> ordersList = new ArrayList<>();

            ordersList.add(Order.newBuilder().setUserId(1).setOrderId(1).setTotalAmount(1000)
                .setOrderDate(getTimestamp()).build());
            ordersList.add(Order.newBuilder().setUserId(1).setOrderId(2).setTotalAmount(1960)
                .setOrderDate(getTimestamp()).build());
            ordersList.add(Order.newBuilder().setUserId(1).setOrderId(5).setTotalAmount(2960)
                .setOrderDate(getTimestamp()).build());
            ordersList.add(Order.newBuilder().setUserId(2).setOrderId(200).setTotalAmount(1560)
                .setOrderDate(getTimestamp()).build());

            return ordersList;
        }

        private Iterable<Order> ordersByUserId(int userId) {
            return () -> orders()
                .stream()
                .filter(order -> order.getUserId() == userId)
                .iterator();
        }

        @Override
        public void getOrdersByUserId(OrdersByUserIdRequest request, StreamObserver<OrdersByUserIdResponse> responseObserver) {
            logger.info("Get orders by user id " + request);

            if (request.getUserId() <= 0) {
                logger.log(Level.SEVERE, "Request contain invalid user ID!");

                throw new InvalidParameterException("Request must contain valid user ID.");
            }

            OrdersByUserIdResponse response = OrdersByUserIdResponse.newBuilder()
                .addAllOrders(ordersByUserId(request.getUserId()))
                .build();
            responseObserver.onNext(response);
            responseObserver.onCompleted();
        }
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        OrderService orderService = new OrderService();
        orderService.start();
        orderService.server.awaitTermination();
    }
}
