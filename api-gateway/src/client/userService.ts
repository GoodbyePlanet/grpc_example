import {credentials, ServiceError} from "@grpc/grpc-js";
import {UserServiceClient} from "../proto/user/v1/user_grpc_pb";
import {GetAllUsersRequest, GetAllUsersResponse, GetUserRequest, GetUserResponse} from "../proto/user/v1/user_pb";

export class UserService {
  service: UserServiceClient;

  constructor() {
    this.service = new UserServiceClient("127.0.0.1:50051", credentials.createInsecure());
  }

  getAllUsers(callback: any): void {
    const userRequest = new GetAllUsersRequest();

    this.service.getAllUsers(userRequest, (error: ServiceError | null, response: GetAllUsersResponse) => {
      if (error) {
        console.error("An error has occurred", error);
      }

      callback(response.toObject());
    });
  }


  getUserById(id: number, callback: any): void {
    const userRequest: GetUserRequest = new GetUserRequest();
    userRequest.setId(id);

    this.service.getUserById(userRequest, (error: ServiceError | null, response: GetUserResponse) => {
      if (error) {
        console.error("An error has occurred", error);
        callback(null);
        return;
      }

      console.log("Get user by id response", response.toObject());
      callback(response.toObject());
    });
  }
}