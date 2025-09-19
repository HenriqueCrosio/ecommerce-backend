// backend/src/services/productService.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const productService = {
  getProducts: async (category?: string) => {
    if (category) {
      return prisma.product.findMany({ where: { category } });
    }
    return prisma.product.findMany();
  },

  getProductById: async (id: number) => {
    return prisma.product.findUnique({ where: { id } });
  },

  createProduct: async (data: {
    name: string;
    price: number;
    image: string;
    category: string;
    variants: string[];
    available: boolean;
  }) => {
    return prisma.product.create({ data });
  },
};

