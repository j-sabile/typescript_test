import { Express } from "express";
import { verifyToken } from "./authMiddleware.js";
import { createPhone, getUsers } from "./controller.js";

const router = (app: Express) => {
  app.get("/", (req, res) => res.status(200).json({ message: "API HOME" }));
  app.get("/users", verifyToken, getUsers);
  app.post("/phones", verifyToken, createPhone);
};

export { router };
