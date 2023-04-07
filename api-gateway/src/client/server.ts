 mport express from "express";
import {userRoutes} from "./userRoutes";

const PORT = 4000;
const app = express();

userRoutes(app);

app.listen(PORT, (): void => console.log(`API Gateway is running at http://localhost:${PORT}`));
