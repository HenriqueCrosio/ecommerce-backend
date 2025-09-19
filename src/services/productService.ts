import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const productService = {
  /**
   * Get all products
   * If a category is provided, filter by category
   */
  getProducts: async (category?: string) => {
    if (category) {
      return prisma.product.findMany({
        where: { category },
      });
    }
    return prisma.product.findMany();
  },

  /**
   * Get a product by its ID
   */
  getProductById: async (id: number) => {
    return prisma.product.findUnique({
      where: { id },
    });
  },

  /**
   * Create a new product
   */
  createProduct: async (data: {
    name: string;
    price: number;
    image: string;
    category: string;
    variants: string[];
    available: boolean;
  }) => {
    return prisma.product.create({
      data,
    });
  },
};

