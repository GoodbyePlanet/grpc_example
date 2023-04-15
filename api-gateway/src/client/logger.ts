import {Application} from "express";

import pino from "pino-http";

export const initializeLogger = (app: Application) => app.use(pino())