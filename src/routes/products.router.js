import { Router } from "express";
import { products } from "../controllers/products.js";

const ProductsRouter = Router();

ProductsRouter.get("/products", products);

export default ProductsRouter;
