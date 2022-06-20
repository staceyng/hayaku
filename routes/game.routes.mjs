import { Router } from "express";

import db from "../db/models/index.model.mjs";
import GameController from "../controllers/game.controller.mjs";

const router = Router();

const gameController = new GameController(db);

router.post("/games", gameController.postNewGame);
router.put("/games/:id", gameController.putUpdateGame);

export default router;
