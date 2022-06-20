import { Router } from "express";

import db from "../db/models/index.model.mjs";
import UserController from "../controllers/user.controller.mjs";

const router = Router();

const userController = new UserController(db);

router.post("/users", userController.postNewUser);
router.post("/session", userController.postLoginSession);
router.get("/users/:id", userController.getUserFromID);
router.get("/users", userController.getUsers);

export default router;
