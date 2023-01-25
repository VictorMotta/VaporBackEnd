import { Router } from "express";
import { signUp } from "../controllers/auth";

const AuthRouter = Router();

AuthRouter.post("sign-up", signUp);
