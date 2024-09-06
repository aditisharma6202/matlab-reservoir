import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/user';
import { connectMongoDB } from '@/libs/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("I am here")
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  try {
    await connectMongoDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
console.log(res)
    return res.status(201);
  } catch (error) {
     console.log("this is my error",error)
    return res.status(500)
  }
}
