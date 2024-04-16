import React from "react";
import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

async function POST(req, res) {
  await connect();
  try {
    const reqBody = await req.body;
    const { email, password } = reqBody;

    if (!email || !password)
      return res.json({ error: "Please fill all fields." });

    // Check if it is a valid email
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regex))
      return res.json({ error: "Please enter a valid email address." });

    // check if user exists
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.json({
        error:
          "Your email is not registered with us. You might want to register first.",
      });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return res.json({ error: "Invalid password" });
    }

    //create token data
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    //create token
    const token = jwt.sign(tokenData, process.env.NEXT_PUBLIC_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .json({ message: "Login successful", success: true, token });
  } catch (err) {
    console.log(err);
  }
}
export default POST;
