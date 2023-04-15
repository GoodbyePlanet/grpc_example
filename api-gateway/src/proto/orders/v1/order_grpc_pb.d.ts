// package: orders.v1
// file: orders/v1/order.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as orders_v1_order_pb from "../../orders/v1/order_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrdersByUserId: IOrderServiceService_IGetOrdersByUserId;
}

interface IOrderServiceService_IGetOrdersByUserId extends grpc.MethodDefinition<orders_v1_order_pb.OrdersByUserIdRequest, orders_v1_order_pb.OrdersByUserIdResponse> {
    path: "/orders.v1.OrderService/GetOrdersByUserId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_v1_order_pb.OrdersByUserIdRequest>;
    requestDeserialize: grpc.deserialize<orders_v1_order_pb.OrdersByUserIdRequest>;
    responseSerialize: grpc.serialize<orders_v1_order_pb.OrdersByUserIdResponse>;
    responseDeserialize: grpc.deserialize<orders_v1_order_pb.OrdersByUserIdResponse>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer extends grpc.UntypedServiceImplementation {
    getOrdersByUserId: grpc.handleUnaryCall<orders_v1_order_pb.OrdersByUserIdRequest, orders_v1_order_pb.OrdersByUserIdResponse>;
}

export interface IOrderServiceClient {
    getOrdersByUserId(request: orders_v1_order_pb.OrdersByUserIdRequest, callback: (error: grpc.ServiceError | null, response: orders_v1_order_pb.OrdersByUserIdResponse) => void): grpc.ClientUnaryCall;
    getOrdersByUserId(request: orders_v1_order_pb.OrdersByUserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_v1_order_pb.OrdersByUserIdResponse) => void): grpc.ClientUnaryCall;
    getOrdersByUserId(request: orders_v1_order_pb.OrdersByUserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_v1_order_pb.OrdersByUserIdResponse) => void): grpc.ClientUnaryCall;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOrdersByUserId(request: orders_v1_order_pb.OrdersByUserIdRequest, callback: (error: grpc.ServiceError | null, response: orders_v1_order_pb.OrdersByUserIdResponse) => void): grpc.ClientUnaryCall;
    public getOrdersByUserId(request: orders_v1_order_pb.OrdersByUserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_v1_order_pb.OrdersByUserIdResponse) => void): grpc.ClientUnaryCall;
    public getOrdersByUserId(request: orders_v1_order_pb.OrdersByUserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_v1_order_pb.OrdersByUserIdResponse) => void): grpc.ClientUnaryCall;
}
