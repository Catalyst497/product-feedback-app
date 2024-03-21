import mongoose from 'mongoose' 
import {connect} from '@/dbConfig/dbConfig'

connect()

// import { NextRequest, NextResponse } from "next/server";


export default async function POST(req, res) {
    try {
        const reqBody = await req.body
        // const {username, email, password} = reqBody;

        res.json({source: 'From backend', ...reqBody})
    } catch (err) {
        console.log(err)
    }
}
