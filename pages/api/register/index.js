import mongoose from "mongoose";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

// import { NextRequest, NextResponse } from "next/server";

export default async function POST(req, res) {
  connect();
  try {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const reqBody = await req.body;
    const { username, email, password } = reqBody;

    if (!username || !email || !password)
      return res.json({ error: "Please fill all fields." });
    if (!email.match(regex)) return res.json({error: "Please enter a valid email address."})

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        message: "You already have an account with us. Please login",
      });
    }

    const userNameTwin = await User.findOne({ username });
    if (userNameTwin) {
        return res.json({error: 'Sorry, this username is taken. Please try another.'})
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return res.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (err) {
    console.log(err);
  }
}
