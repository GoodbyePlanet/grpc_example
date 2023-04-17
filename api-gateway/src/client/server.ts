import express, {Application} from "express";

import {initializeLogger} from "./logger";
import {userRoutes} from "./userRoutes";

const PORT = 4000;
const app: Application = express();

initializeLogger(app);
userRoutes(app);

app.listen(PORT, (): void => console.log(`API Gateway is running at http://localhost:${PORT}`));
