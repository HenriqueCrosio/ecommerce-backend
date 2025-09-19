// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clean current data (safe for local/demo)
  await prisma.product.deleteMany();

  // Single, game-related demo product
  await prisma.product.create({
    data: {
      name: "Gaming Headset Pro",
      price: 89.99,
      // Stable demo image (Picsum)
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      category: "Gaming Accessories",
      variants: ["Black/Red", "White/Blue"],
      available: false, // Turn true will change the mark "in Stock" to "Out of Stock"!
    },
  });

  console.log("🌱 Seed completed: 1 demo product inserted.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());


