import { Router } from "express";
import {
  addProduct,
  products,
  productsPromotion,
} from "../controllers/productsController.js";
import { authValidation } from "../middlewares/authMiddleware.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { addProductSchema } from "../schemas/productsSchemas.js";

const ProductsRouter = Router();

ProductsRouter.get("/products", products);
ProductsRouter.get("/products-promotion", productsPromotion);
ProductsRouter.post(
  "/products",
  authValidation,
  validateSchema(addProductSchema),
  addProduct
);

export default ProductsRouter;
