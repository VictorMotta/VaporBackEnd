import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { signInSchema, signUpSchema } from "../schemas/authSchemas.js";

const AuthRouter = Router();

AuthRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
AuthRouter.post("/sign-in", validateSchema(signInSchema), signIn);

export default AuthRouter;
