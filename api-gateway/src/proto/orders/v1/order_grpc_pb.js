// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

var orders_v1_order_pb = require('../../orders/v1/order_pb.js');

function serialize_orders_v1_OrdersByUserIdRequest(arg) {
  if (!(arg instanceof orders_v1_order_pb.OrdersByUserIdRequest)) {
    throw new Error('Expected argument of type orders.v1.OrdersByUserIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_v1_OrdersByUserIdRequest(buffer_arg) {
  return orders_v1_order_pb.OrdersByUserIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_orders_v1_OrdersByUserIdResponse(arg) {
  if (!(arg instanceof orders_v1_order_pb.OrdersByUserIdResponse)) {
    throw new Error('Expected argument of type orders.v1.OrdersByUserIdResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_orders_v1_OrdersByUserIdResponse(buffer_arg) {
  return orders_v1_order_pb.OrdersByUserIdResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  getOrdersByUserId: {
    path: '/orders.v1.OrderService/GetOrdersByUserId',
    requestStream: false,
    responseStream: false,
    requestType: orders_v1_order_pb.OrdersByUserIdRequest,
    responseType: orders_v1_order_pb.OrdersByUserIdResponse,
    requestSerialize: serialize_orders_v1_OrdersByUserIdRequest,
    requestDeserialize: deserialize_orders_v1_OrdersByUserIdRequest,
    responseSerialize: serialize_orders_v1_OrdersByUserIdResponse,
    responseDeserialize: deserialize_orders_v1_OrdersByUserIdResponse,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
