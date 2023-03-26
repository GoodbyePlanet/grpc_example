import {credentials, ServiceError} from "@grpc/grpc-js";
import {UserServiceClient} from "../proto/user/v1/user_grpc_pb";
import {GetAllUsersRequest, GetAllUsersResponse, GetUserRequest, GetUserResponse} from "../proto/user/v1/user_pb";

const usersClient = new UserServiceClient("127.0.0.1:50051", credentials.createInsecure());

function getUserByEmailRequest(email: string): GetUserRequest {
  const userRequest: GetUserRequest = new GetUserRequest();
  userRequest.setEmail(email);

  return userRequest;
}

function getAllUsersRequest(): GetAllUsersRequest {
  return new GetAllUsersRequest();
}

function getUserByEmail(email: string): void {
  usersClient.getUserByEmail(getUserByEmailRequest(email), (error: ServiceError | null, response: GetUserResponse) => {
    if (error) {
      console.error("An error has occurred", error);
    }

    console.log("Get user by email response", response.toObject());
  });
}

function getAllUsers(): void {
  usersClient.getAllUsers(getAllUsersRequest(), (error: ServiceError | null, response: GetAllUsersResponse) => {
    if (error) {
      console.error("An error has occurred", error);
    }

    console.log("Get all users response", response.toObject());
  })
}

getAllUsers();
// ----------------------------------------
getUserByEmail("petar.petrovic@gmail.com");