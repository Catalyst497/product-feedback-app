import React from 'react'
import User from "@/models/userModel";
import jwt from 'jsonwebtoken'

async function handler(req, res) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET);
    console.log(decoded)
    return res.status(200).json({message: 'User authorized.', user: decoded})
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Token is expired, send back a 401 Unauthorized response
      return res.status(401).json({ message: 'Token expired' });
    } else {
      // Token verification failed for another reason, send back a 401 Unauthorized response
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
  
}

export default handler