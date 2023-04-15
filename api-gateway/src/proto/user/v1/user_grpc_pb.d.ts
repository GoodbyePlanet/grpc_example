// package: user.v1
// file: user/v1/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_v1_user_pb from "../../user/v1/user_pb";
import * as orders_v1_order_pb from "../../orders/v1/order_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserById: IUserServiceService_IGetUserById;
    getAllUsers: IUserServiceService_IGetAllUsers;
}

interface IUserServiceService_IGetUserById extends grpc.MethodDefinition<user_v1_user_pb.GetUserRequest, user_v1_user_pb.GetUserResponse> {
    path: "/user.v1.UserService/GetUserById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_v1_user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_v1_user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_v1_user_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<user_v1_user_pb.GetUserResponse>;
}
interface IUserServiceService_IGetAllUsers extends grpc.MethodDefinition<user_v1_user_pb.GetAllUsersRequest, user_v1_user_pb.GetAllUsersResponse> {
    path: "/user.v1.UserService/GetAllUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_v1_user_pb.GetAllUsersRequest>;
    requestDeserialize: grpc.deserialize<user_v1_user_pb.GetAllUsersRequest>;
    responseSerialize: grpc.serialize<user_v1_user_pb.GetAllUsersResponse>;
    responseDeserialize: grpc.deserialize<user_v1_user_pb.GetAllUsersResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    getUserById: grpc.handleUnaryCall<user_v1_user_pb.GetUserRequest, user_v1_user_pb.GetUserResponse>;
    getAllUsers: grpc.handleUnaryCall<user_v1_user_pb.GetAllUsersRequest, user_v1_user_pb.GetAllUsersResponse>;
}

export interface IUserServiceClient {
    getUserById(request: user_v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUserById(request: user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUserById(request: user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_v1_user_pb.GetAllUsersRequest, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_v1_user_pb.GetAllUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_v1_user_pb.GetAllUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUserById(request: user_v1_user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUserById(request: user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUserById(request: user_v1_user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_v1_user_pb.GetAllUsersRequest, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_v1_user_pb.GetAllUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_v1_user_pb.GetAllUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_v1_user_pb.GetAllUsersResponse) => void): grpc.ClientUnaryCall;
}
