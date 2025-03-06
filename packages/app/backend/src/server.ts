import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import serverless from "serverless-http";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  AskJarvisResponse,
  HttpStatusCode,
} from "@portfolio/common/src/shared-endpoints";
import { isValidAskJarvisRequest } from "./validators/ask-jarvis-request";

const allowedOrigin = {
  development: ["http://localhost:5173/portfolio/"],
  production: ["https://kylerhansen.github.io"],
};

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

  if (!isValidAskJarvisRequest(requestBody)) {
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

  const responseBody: AskJarvisResponse = { message: result.response.text() };

  res.status(HttpStatusCode.Ok).json(responseBody);
});

export const handler = serverless(app);
