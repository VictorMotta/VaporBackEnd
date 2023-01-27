import { Router } from "express";
import { logoutUser, signIn, signUp } from "../controllers/auth.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { signInSchema, signUpSchema } from "../schemas/authSchemas.js";
import { authValidation } from "../middlewares/authMiddleware.js";

const AuthRouter = Router();

AuthRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
AuthRouter.post("/sign-in", validateSchema(signInSchema), signIn);
AuthRouter.delete("/sign-out", authValidation, logoutUser);

export default AuthRouter;
