// import { NextRequest, NextResponse } from "next/server";

export default function GET(req, res) {
    res.status(200).json({ message: 'Hello world.' })
}