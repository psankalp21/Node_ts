import { Request, Response } from 'express';
import { User } from '../database/user_model';

export async function signup(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password, dob } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      dob
    });

    res.status(201).json({
      message: 'Signup successful',
      user
    });
  } catch (error) {
    console.error('Error occurred during signup:', error);
    res.status(500).json({
      message: 'An error occurred during signup'
    });
  }
}
