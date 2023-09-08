import express from "express";
import { router } from "./router.js";
import { connect, ConnectOptions } from "mongoose";
import { DATABASE_URI } from "./config.js";

const app = express();
const PORT = 3000;

router(app);

try {
  if (!DATABASE_URI) throw new Error("DATABASE_URI is missing");
  await connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);
  console.log("\nConnected to MongoDB");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => console.log(`Listening to Port ${PORT}`));
