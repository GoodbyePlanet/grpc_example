import {credentials, ServiceError} from "@grpc/grpc-js";
import {UserServiceClient} from "../proto/user/v1/user_grpc_pb";
import {GetAllUsersRequest, GetAllUsersResponse, GetUserRequest, GetUserResponse} from "../proto/user/v1/user_pb";

export class UserService {
  service: UserServiceClient;

  constructor() {
    this.service = new UserServiceClient("127.0.0.1:50051", credentials.createInsecure());
  }

  getAllUsers(callback: (users: GetAllUsersResponse.AsObject) => void): void {
    const userRequest = new GetAllUsersRequest();

    this.service.getAllUsers(userRequest, (error: ServiceError | null, response: GetAllUsersResponse) => {
      if (error) {
        console.error("An error has occurred", error);
      }

      callback(response.toObject());
    });
  }

  getUserById(id: number, callback: (user: GetUserResponse.AsObject | null) => void): void {
    const userRequest: GetUserRequest = new GetUserRequest();
    userRequest.setId(id);

    this.service.getUserById(userRequest, (error: ServiceError | null, response: GetUserResponse) => {
      if (error) {
        console.error("An error has occurred", error);
        callback(null);
        return;
      }

      callback(response.toObject());
    });
  }
}
