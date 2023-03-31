import {Application, Request, Response} from "express";
import {UserService} from "./userService";
import {GetAllUsersResponse, GetUserResponse, User} from "../proto/user/v1/user_pb";

const userService = new UserService();

export const userRoutes = (app: Application) => {
  app.get("/api/users", (req: Request, res: Response) => {
    userService.getAllUsers((users: GetAllUsersResponse.AsObject) => res.send(users));
  });

  app.get("/api/users/:id", (req: Request, res: Response) => {
    const id = req.params?.id;

    userService.getUserById(parseInt(id), (user: GetUserResponse.AsObject | null) => {
      if (!user) {
        res.status(404).send({error: "Not found"});
        return;
      }

      res.send(user);
    });
  });
}