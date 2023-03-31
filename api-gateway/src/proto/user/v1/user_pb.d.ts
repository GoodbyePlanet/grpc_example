// package: user.v1
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getFirstName(): string;
    setFirstName(value: string): User;
    getLastName(): string;
    setLastName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        firstName: string,
        lastName: string,
        email: string,
    }
}

export class GetUserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): GetUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class GetAllUsersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllUsersRequest): GetAllUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllUsersRequest;
    static deserializeBinaryFromReader(message: GetAllUsersRequest, reader: jspb.BinaryReader): GetAllUsersRequest;
}

export namespace GetAllUsersRequest {
    export type AsObject = {
    }
}

export class GetAllUsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): GetAllUsersResponse;
    addUsers(value?: User, index?: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllUsersResponse): GetAllUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllUsersResponse;
    static deserializeBinaryFromReader(message: GetAllUsersResponse, reader: jspb.BinaryReader): GetAllUsersResponse;
}

export namespace GetAllUsersResponse {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}
