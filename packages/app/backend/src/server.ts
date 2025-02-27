import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import serverless from "serverless-http";

const allowedOrigin = {
  development: ["http://localhost:5173/portfolio/"],
  production: ["https://kylerhansen.github.io/portfolio/"],
};

export enum HttpStatusCode {
  Ok = 200,
  BadRequest = 400,
  GenericServerError = 500,
}

dotenv.config();

const app = express();

const env =
  process.env.NODE_ENV === "development" ? "development" : "production";

const corsOptions: CorsOptions = {
  methods: ["GET", "POST"],
  origin: allowedOrigin[env] || [],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(HttpStatusCode.Ok);
});

app.post("/askJarvis", (req: Request, res: Response) => {
  res.sendStatus(HttpStatusCode.Ok);
});

export const handler = serverless(app);
