import { Request } from "express";

interface CustomRequest extends Request {
  user?: {
    userId?: string;
    userType?: string;
  };
}

export default CustomRequest;
