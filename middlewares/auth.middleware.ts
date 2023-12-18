import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = await User.findOne({
      token: token,
      deleted: false,
    }).select("-password");

    // cho user vào request.
    if (user) {
      req["user"] = user;
    }
  }
  // phải cho next() hết vì middleware này ko giới hạn đi qua
  // nơi nào
  next();
};
