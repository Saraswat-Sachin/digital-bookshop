import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

//Protect Routes

export const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorised, invalid token.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorised, no token.");
  }
});
