// backend/src/app.ts
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/products", productRoutes);

export default app;
