import {Server, ServerCredentials, ServerUnaryCall, sendUnaryData} from "@grpc/grpc-js";

import {LoginRequest, LoginResponse} from "../proto/auth/v1/auth_pb";
import {AuthServiceService} from "../proto/auth/v1/auth_grpc_pb";

const users = [
  {id: 0, username: "admin", password: "qwerty"}
]

const login = (
  call: ServerUnaryCall<LoginRequest, LoginResponse>,
  callback: sendUnaryData<LoginResponse>
) => {
  const requestData = call.request;
  const user = users.find(
    (user) => user.username === requestData.getUserName() && user.password === requestData.getPassword()
  )

  console.log("user", user);

  if (user) {
    const loginResponse = new LoginResponse();
    loginResponse.setLoginCode(LoginResponse.LoginCode.SUCCESS);
    loginResponse.setToken("here is the token");

    callback(null, loginResponse);
  } else {
    const loginFailResponse = new LoginResponse();
    loginFailResponse.setLoginCode(LoginResponse.LoginCode.FAIL);
    callback(null, loginFailResponse);
  }
}

const server = new Server();

server.addService(AuthServiceService, {login});
server.bindAsync("localhost:8080", ServerCredentials.createInsecure(), () => {
  console.log("Starting server on port  8080");

  server.start();
});

