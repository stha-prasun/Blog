import { Request, Response } from "express";
import User, { IUser } from "../models/userSchema";
import bcrypt from "bcryptjs";

interface SignupRequest extends Request {
  body: {
    username: string;
    password: string;
  };
}

export const signup = async (req: SignupRequest, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Fields cannot be left empty",
        success: false,
      });
    }

    const user: IUser | null = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        message: "Username Already In Use!!",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully!!",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
