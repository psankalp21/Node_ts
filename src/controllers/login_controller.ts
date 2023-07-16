import { Request, Response } from 'express';
import { loginservice } from '../services/login_service';

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;
    const user = await loginservice(email, password);

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error occurred during login:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
}
