import { Router } from "express";
import { addProduct, products } from "../controllers/productsController.js";
import { authValidation } from "../middlewares/authMiddleware.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { addProductSchema } from "../schemas/productsSchemas.js";

const ProductsRouter = Router();

ProductsRouter.get("/products/:id?", products);
ProductsRouter.post(
  "/products",
  authValidation,
  validateSchema(addProductSchema),
  addProduct
);

export default ProductsRouter;
