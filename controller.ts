import { Request, Response } from "express";
import { Phone } from "./phoneModel.js";
import CustomRequest from "./CustomRequest.js";

const getUsers = (reqs: Request, res: Response) => {
  try {
    const users = [
      { name: "Jane Doe", age: 22 },
      { name: "John Doe", age: 23 },
    ];
    res.status(200).json({ success: true, request: users });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Error" });
  }
};

const createPhone = async (reqs: Request, res: Response) => {
  try {
    const req = reqs as CustomRequest;
    if (!req.user) throw new Error("Not Logged In");
    if (req.user.userType === "Admin") {
      const phone = new Phone({ brand: "Xiaomi", ram: 4 }).save();
      res.status(200).json({ message: "Success" });
    } else res.status(403).json({ message: "Not Authorized" });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Error", error: error.message });
  }
};

export { getUsers, createPhone };
