import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import serverless from "serverless-http";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

app.post("/askJarvis", async (req: Request, res: Response) => {
  const requestBody = req.body;

  if (requestBody.question === undefined) {
    res.sendStatus(HttpStatusCode.BadRequest);
    throw new Error("Invalid request");
  }

  const apiKey = process.env.AI_API_KEY;
  const prompt = process.env.AI_PROMPT;

  if (!apiKey || !prompt) {
    res.sendStatus(HttpStatusCode.GenericServerError);
    throw new Error("One or more AI settings is undefined");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent(prompt + requestBody.question);

  res.status(HttpStatusCode.Ok).json({ message: result.response.text() });
});

export const handler = serverless(app);
