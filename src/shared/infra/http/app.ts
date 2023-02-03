import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, response, Response } from "express";
import cors from "cors";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import upload from "@config/upload";

import createConnection from "@shared/infra/typeorm";

import "@shared/container";

import { router } from './routes';
import swaggerFile from '../../../swagger.json';

import { AppError } from '@shared/errors/AppError';


createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use("/cars", express.static(`${upload.tmpFolder}/cars`));

app.use(cors());

app.use(router);

app.use((err: Error, req: Request, res: Response, Next: NextFunction) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }

    return res.status(500).json({
        status: "Error",
        message: `Internal server error - ${err.message}`
    })
});

export { app }
