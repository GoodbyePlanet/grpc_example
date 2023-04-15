"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_js_1 = require("@grpc/grpc-js");

var auth_grpc_pb_1 = require("../proto/auth/v1/auth_grpc_pb");
var auth_pb_1 = require("../proto/auth/v1/auth_pb");
var users = [
    { id: 0, username: "admin", password: "qwerty" }
];
var login = function (call, callback) {
    var requestData = call.request;
    var user = users.find(function (user) { return user.username === requestData.getUserName() && user.password === requestData.getPassword(); });
    console.log("user", user);
    if (user) {
        var loginResponse = new auth_pb_1.LoginResponse();
        loginResponse.setLoginCode(auth_pb_1.LoginResponse.LoginCode.SUCCESS);
        loginResponse.setToken("here is the token");
        callback(null, loginResponse);
    }
    else {
        var loginFailResponse = new auth_pb_1.LoginResponse();
        loginFailResponse.setLoginCode(auth_pb_1.LoginResponse.LoginCode.FAIL);
        callback(null, loginFailResponse);
    }
};
var server = new grpc_js_1.Server();
server.addService(auth_grpc_pb_1.AuthServiceService, { login: login });
server.bindAsync("localhost:8080", grpc_js_1.ServerCredentials.createInsecure(), function () {
    console.log("Starting server on port  8080");
    server.start();
});
