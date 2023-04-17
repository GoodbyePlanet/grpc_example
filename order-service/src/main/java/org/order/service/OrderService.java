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
import orders.v1.Item;

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

            ordersList.add(Order.newBuilder().setId(1).setUserId(1).setItem(Item.newBuilder().setId(1).setName("pencil").build())
                .setOrderDate(getTimestamp()).setAmount(1000).build());
            ordersList.add(Order.newBuilder().setId(2).setUserId(1).setItem(Item.newBuilder().setId(2).setName("book").build())
                .setOrderDate(getTimestamp()).setAmount(2310).build());
            ordersList.add(Order.newBuilder().setId(3).setUserId(1).setItem(Item.newBuilder().setId(3).setName("magic stick").build())
                .setOrderDate(getTimestamp()).setAmount(120).build());
            ordersList.add(Order.newBuilder().setId(4).setUserId(2).setItem(Item.newBuilder().setId(5).setName("ball").build())
                .setOrderDate(getTimestamp()).setAmount(129).build());

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
