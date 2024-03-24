import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
// import { Configuration, OpenAIApi } from "openai";
// import { OpenAIApi } from "openai";
import Openai from "openai";
//import { Configuration, OpenAIApi } from "openai";
import openAiRoutes from "./routes/openai.js";
import authRoutes from "./routes/auth.js";

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* OPEN AI CONFIGURATION */
// const configuration = new Configuration({
//   apiKey: process.env.OPEN_API_KEY,
// });
// export const openai = new OpenAIApi(configuration);
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});



/* ROUTES */
app.use("/openai", openAiRoutes);
app.use("/auth", authRoutes);

// server setup
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});



