Product API (Backend)
Tech stack (brief)

Node.js + TypeScript + Express + Prisma ORM with PostgreSQL. The Prisma schema defines a Product model and migrations keep the database in sync. Development runs with npm run dev and a .env DATABASE_URL.

How to run (local)

Copy .env.example to .env and set DATABASE_URL.

Install & generate:

npm install
npm run prisma:generate
npm run prisma:migrate
npm run seed # optional: inserts one demo product
npm run dev

Server: http://localhost:4000

Endpoints

GET /products — list all products

GET /products/:id — get a single product by id

GET /products?category=Apparel — filter products by category (replace Apparel)

(bonus) POST /products — create a new product

Sample JSON (response)
[
{
"id": 1,
"name": "Gaming Headset Pro",
"price": 89.99,
"image": "https://picsum.photos/seed/gamingheadset/600/400",
"category": "Gaming Accessories",
"variants": ["Black/Red", "White/Blue"],
"available": true
}
]

Sample cURL

List all:

curl -X GET http://localhost:4000/products

Get by id:

curl -X GET http://localhost:4000/products/1

Filter by category:

curl -G http://localhost:4000/products --data-urlencode "category=Gaming Accessories"

Create (bonus):

curl -X POST http://localhost:4000/products \
 -H "Content-Type: application/json" \
 -d '{
"name": "Gaming Headset Pro",
"price": 89.99,
"image": "https://picsum.photos/seed/gamingheadset/600/400",
"category": "Gaming Accessories",
"variants": ["Black/Red", "White/Blue"],
"available": true
}'

Deployment (Render)

Build: npm install && npm run build

Start: npm start

Environment variable: DATABASE_URL (use Render Internal Database URL)

Apply migrations (optional via shell): npm run prisma:deploy

(Optional) Seed demo data: npm run seed
