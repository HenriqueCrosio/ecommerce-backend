// backend/src/routes/productRoutes.ts
import { Router } from "express";
import { getProducts, getProductById, getProductsByCategory, createProduct } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/category/:category", getProductsByCategory);
router.post("/", createProduct);

export default router;
