import { Router } from "express";
import { createCheckout } from "../controllers/checkouts.js";
import { authValidation } from "../middlewares/authMiddleware.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { checkoutSchema } from "../schemas/checkoutSchemas.js";

const CheckoutRouter = Router();

CheckoutRouter.use(authValidation);
CheckoutRouter.post(
  "/checkout",
  validateSchema(checkoutSchema),
  createCheckout
);

export default CheckoutRouter;
