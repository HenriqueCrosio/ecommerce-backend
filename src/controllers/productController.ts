// backend/src/controllers/productController.ts
import { Request, Response } from "express";
import { productService } from "../services/productService";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const category = req.query.category as string | undefined;
    const products = await productService.getProducts(category);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const product = await productService.getProductById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const category = req.params.category;
    const products = await productService.getProducts(category);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, image, category, variants, available } = req.body;
    const product = await productService.createProduct({ name, price, image, category, variants, available });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};
