import { Request, Response, NextFunction } from "express";
import CustomRequest from "./CustomRequest.js";

const verifyToken = (reqs: Request, res: Response, next: NextFunction) => {
  try {
    const req = reqs as CustomRequest;
    req.user = {};
    (req.user.userType = "Admin"), (req.user.userId = "1234");
    next();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Error" });
  }
};

export { verifyToken };
