import express from "express";
import cors from "cors";
import AuthRouter from "./routes/authRoutes.js";
import ProductsRouter from "./routes/productsRouter.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const server = express();
server.use(cors());
server.use(express.json());

server.use([AuthRouter, ProductsRouter]);

server.listen(port, console.log(`Servidor iniciado com sucesso! Na porta: ${port}`));
