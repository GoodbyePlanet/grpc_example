// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');

var auth_pb = require('./auth_pb.js');

function serialize_auth_v1_LoginRequest(arg) {
  if (!(arg instanceof auth_pb.LoginRequest)) {
    throw new Error('Expected argument of type auth.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_LoginRequest(buffer_arg) {
  return auth_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_LoginResponse(arg) {
  if (!(arg instanceof auth_pb.LoginResponse)) {
    throw new Error('Expected argument of type auth.v1.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_LoginResponse(buffer_arg) {
  return auth_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  login: {
    path: '/auth.v1.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.LoginRequest,
    responseType: auth_pb.LoginResponse,
    requestSerialize: serialize_auth_v1_LoginRequest,
    requestDeserialize: deserialize_auth_v1_LoginRequest,
    responseSerialize: serialize_auth_v1_LoginResponse,
    responseDeserialize: deserialize_auth_v1_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
