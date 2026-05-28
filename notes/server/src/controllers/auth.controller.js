import asycHandler from "../utils/asycHandler.js";
import { registerService } from "../services/auth.services.js";
import jwt from "jsonwebtoken";

// controller for user registration
const registerUser = asycHandler(async (req, res) => {
  const response = await registerService(req.body);

  let token = jwt.sign(
    {
      userId: response._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: response,
  });
});

// controller for user login
const loginUser = asycHandler(async (req, res) => {});

export { registerUser, loginUser };
