import { Request, Response } from "express";
import { productService } from "../services/productService";

/**
 * GET /products
 * - Returns all products
 * - If query parameter ?category= is provided, filters by category
 */
export const getProducts = async (req: Request, res: Response) => {
  try {
    const category = req.query.category as string | undefined;
    const products = await productService.getProducts(category);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

/**
 * GET /products/:id
 * - Returns a single product by ID
 */
export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const product = await productService.getProductById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

/**
 * GET /products/category/:category
 * - Alternative route to filter products by category
 */
export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const category = req.params.category;
    const products = await productService.getProducts(category);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};

/**
 * POST /products
 * - (Bonus) Creates a new product
 */
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, image, category, variants, available } = req.body;

    const product = await productService.createProduct({
      name,
      price,
      image,
      category,
      variants,
      available,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

