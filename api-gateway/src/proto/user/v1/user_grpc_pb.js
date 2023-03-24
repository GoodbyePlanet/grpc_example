// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_v1_GetAllUsersRequest(arg) {
  if (!(arg instanceof user_pb.GetAllUsersRequest)) {
    throw new Error('Expected argument of type user.v1.GetAllUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_GetAllUsersRequest(buffer_arg) {
  return user_pb.GetAllUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_GetAllUsersResponse(arg) {
  if (!(arg instanceof user_pb.GetAllUsersResponse)) {
    throw new Error('Expected argument of type user.v1.GetAllUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_GetAllUsersResponse(buffer_arg) {
  return user_pb.GetAllUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type user.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_v1_GetUserResponse(arg) {
  if (!(arg instanceof user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type user.v1.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_v1_GetUserResponse(buffer_arg) {
  return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUserByEmail: {
    path: '/user.v1.UserService/GetUserByEmail',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.GetUserResponse,
    requestSerialize: serialize_user_v1_GetUserRequest,
    requestDeserialize: deserialize_user_v1_GetUserRequest,
    responseSerialize: serialize_user_v1_GetUserResponse,
    responseDeserialize: deserialize_user_v1_GetUserResponse,
  },
  getAllUsers: {
    path: '/user.v1.UserService/GetAllUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetAllUsersRequest,
    responseType: user_pb.GetAllUsersResponse,
    requestSerialize: serialize_user_v1_GetAllUsersRequest,
    requestDeserialize: deserialize_user_v1_GetAllUsersRequest,
    responseSerialize: serialize_user_v1_GetAllUsersResponse,
    responseDeserialize: deserialize_user_v1_GetAllUsersResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
