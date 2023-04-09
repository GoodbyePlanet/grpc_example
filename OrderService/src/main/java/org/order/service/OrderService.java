package org.order.service;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;
import org.order.service.Order.Builder;
import org.order.service.Order;
import org.order.service.OrdersByUserIdRequest;
import org.order.service.OrdersByUserIdResponse;
import org.order.service.OrderServiceGrpc.OrderServiceImplBase;
import org.order.service.OrdersByUserIdResponse;

import com.google.protobuf.Timestamp;
import com.google.protobuf.TimestampOrBuilder;

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

        private Builder getOrderBuilder() {
            Timestamp timestamp = Timestamp.newBuilder()
                .setSeconds(System.currentTimeMillis() / 1000)
                .setNanos((int) ((System.currentTimeMillis() % 1000) * 1000000))
                .build();

            return Order.newBuilder().setUserId(1).setOrderId(1).setTotalAmount(10)
                .setOrderDate(timestamp);
        }

        @Override
        public void getOrdersByUserId(OrdersByUserIdRequest request, StreamObserver<OrdersByUserIdResponse> responseObserver) {
            logger.info("Get order by user id " + request);

            OrdersByUserIdResponse response =  OrdersByUserIdResponse.newBuilder()
                .addOrders(getOrderBuilder())
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
