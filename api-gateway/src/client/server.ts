import express from "express";

import {userRoutes} from "./userRoutes";
import {initializeLogger} from "./logger";

const PORT = 4000;
const app = express();

initializeLogger(app);
userRoutes(app);

app.listen(PORT, (): void => console.log(`API Gateway is running at http://localhost:${PORT}`));
