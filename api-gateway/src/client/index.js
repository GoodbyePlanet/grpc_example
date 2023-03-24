"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_js_1 = require("@grpc/grpc-js");
var user_grpc_pb_1 = require("../proto/user/v1/user_grpc_pb");
var user_pb_1 = require("../proto/user/v1/user_pb");
// const loginRequest: LoginRequest = new LoginRequest();
// loginRequest.setUserName("admin");
// loginRequest.setPassword("qwerty");
//
// const authClient = new AuthServiceClient("localhost:8080", credentials.createInsecure());
//
// authClient.login(loginRequest, (error: ServiceError | null, response: LoginResponse) => {
//   if (error) {
//     console.log("ERROR", error);
//   }
//
//   const obj = response.toObject();
//   const loginStatus = getEnumKey(LoginResponse.LoginCode, obj.loginCode);
//
//   console.log("RESPONSE", obj.token, loginStatus);
//
// });
// ---------------------------------------------------------------------------------------------
var userRequest = new user_pb_1.GetUserRequest();
userRequest.setEmail("john.doe@gmail.com");
var usersClient = new user_grpc_pb_1.UserServiceClient("localhost:8001", grpc_js_1.credentials.createInsecure());
usersClient.getUserByEmail(userRequest, function (error, response) {
    if (error) {
        console.error("An error has occurred", error);
    }
    var user = response.toObject();
    console.log("USER", user);
});
