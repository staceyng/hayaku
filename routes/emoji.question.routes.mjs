import { Router } from "express";

import db from "../db/models/index.model.mjs";
import EmojiQuestionController from "../controllers/emojiQuestion.controller.mjs";

const router = Router();

const emojiQnController = new EmojiQuestionController(db);

router.get("/questions/:id", emojiQnController.getEmojiQuestion);

export default router;
