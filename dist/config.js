import dotenv from "dotenv";
dotenv.config();
const DATABASE_URI = process.env.DATABASE_URI;
export { DATABASE_URI };
