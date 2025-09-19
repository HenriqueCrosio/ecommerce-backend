// backend/src/app.ts
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Healthcheck for Render
app.get("/", (_req, res) => {
  res.send("✅ API is running. Use /products");
});

app.use("/products", productRoutes);

// 404 handler (after routes)
app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handler
app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;

