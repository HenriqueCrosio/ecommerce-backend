import { Router } from "express";
import {
  getProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
} from "../controllers/productController";

const router = Router();

/**
 * GET /products
 * - Returns all products
 * - If a query parameter ?category= is provided, filters by category
 */
router.get("/", getProducts);

/**
 * GET /products/category/:category
 * - Alternative route to filter products by category
 * - Example: /products/category/Gaming Accessories
 * (Placed before /:id to avoid route conflicts)
 */
router.get("/category/:category", getProductsByCategory);

/**
 * GET /products/:id
 * - Returns a single product by its ID
 */
router.get("/:id", getProductById);

/**
 * POST /products
 * - (Bonus) Creates a new product
 * - Requires a valid JSON body with all product fields
 */
router.post("/", createProduct);

export default router;

