import express from "express";
import path from "path";
import dotenv from "dotenv";

import EmojiQnRouter from "./routes/emoji.question.routes.mjs";
import GameRouter from "./routes/game.routes.mjs";
import UserRouter from "./routes/user.routes.mjs";

const envFilePath = ".env";
dotenv.config({ path: path.normalize(envFilePath) });

const PORT = 3004;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");

const routers = [EmojiQnRouter, GameRouter, UserRouter];
routers.forEach((router) => app.use("/", router));

app.listen(PORT);
console.log(`🚀 App listening on the port ${PORT}`);
