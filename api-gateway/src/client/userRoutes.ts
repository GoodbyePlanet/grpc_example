import {Application, Request, Response} from "express";

import {UserService} from "./userService";
import {GetAllUsersResponse, GetUserResponse} from "../proto/user/v1/user_pb";

const userService = new UserService();

export const userRoutes = (app: Application) => {
  app.get("/api/users", (req: Request, res: Response) => {
    req.log.info("GET all users!");
    userService.getAllUsers((users: GetAllUsersResponse.AsObject) => res.send(users));
  });

  app.get("/api/users/:id", (req: Request, res: Response) => {
    const id = req.params?.id;
    req.log.info(`GET user with ID: ${id}`);

    userService.getUserById(parseInt(id), (user: GetUserResponse.AsObject | null) => {
      if (!user) {
        res.status(404).send({error: "Not found"});
        req.log.error(`User with ID: ${id} not found!`);
        return;
      }

      res.send(user);
    });
  });
}
