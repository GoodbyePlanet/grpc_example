// package: orders.v1
// file: orders/v1/order.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Order extends jspb.Message { 
    getOrderId(): number;
    setOrderId(value: number): Order;
    getUserId(): number;
    setUserId(value: number): Order;

    hasOrderDate(): boolean;
    clearOrderDate(): void;
    getOrderDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOrderDate(value?: google_protobuf_timestamp_pb.Timestamp): Order;
    getTotalAmount(): number;
    setTotalAmount(value: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        orderId: number,
        userId: number,
        orderDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        totalAmount: number,
    }
}

export class OrdersByUserIdRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): OrdersByUserIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersByUserIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersByUserIdRequest): OrdersByUserIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersByUserIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersByUserIdRequest;
    static deserializeBinaryFromReader(message: OrdersByUserIdRequest, reader: jspb.BinaryReader): OrdersByUserIdRequest;
}

export namespace OrdersByUserIdRequest {
    export type AsObject = {
        userId: number,
    }
}

export class OrdersByUserIdResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<Order>;
    setOrdersList(value: Array<Order>): OrdersByUserIdResponse;
    addOrders(value?: Order, index?: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdersByUserIdResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrdersByUserIdResponse): OrdersByUserIdResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdersByUserIdResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdersByUserIdResponse;
    static deserializeBinaryFromReader(message: OrdersByUserIdResponse, reader: jspb.BinaryReader): OrdersByUserIdResponse;
}

export namespace OrdersByUserIdResponse {
    export type AsObject = {
        ordersList: Array<Order.AsObject>,
    }
}
