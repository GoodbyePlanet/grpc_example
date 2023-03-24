import { credentials, ServiceError } from "@grpc/grpc-js";
import { UserServiceClient } from "../proto/user/v1/user_grpc_pb";
import { GetUserRequest, GetUserResponse } from "../proto/user/v1/user_pb";

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

const userRequest: GetUserRequest = new GetUserRequest();
userRequest.setEmail("john.doe@gmail.com");

const usersClient = new UserServiceClient("127.0.0.1:50051", credentials.createInsecure());

usersClient.getUserByEmail(userRequest, (error: ServiceError | null, response: GetUserResponse) => {
  if (error) {
    console.error("An error has occurred", error);
  }

  console.log("response", response);
  const user = response.toObject();
  console.log("USER", user);
});

