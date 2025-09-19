// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create a single demo product for the challenge
  await prisma.product.create({
    data: {
      name: "Gaming Headset Pro",
      price: 89.99,
      image: "https://picsum.photos/seed/gamingheadset/600/400",
      category: "Gaming Accessories",
      variants: ["Black/Red", "White/Blue"],
      available: true,
    },
  });

  console.log("🌱 Demo product created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    prisma.$disconnect();
  });
