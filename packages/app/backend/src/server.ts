import express, { Request, Response } from "express";
import dotenv from "dotenv";
/* import { HttpStatusCode } from "@portfolio/common-universal/src/http-status-code"; */

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
