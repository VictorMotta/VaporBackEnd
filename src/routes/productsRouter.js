import { Router } from "express";
import {
  products,
  productsPromotion,
} from "../controllers/productsController.js";

const ProductsRouter = Router();

ProductsRouter.get("/products", products);
ProductsRouter.get("/products-promotion", productsPromotion);

export default ProductsRouter;
