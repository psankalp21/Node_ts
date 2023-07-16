import { Request, Response } from 'express';
import { User } from '../database/user_model';

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, dob } = req.body;
    var pass: string = password
    if (pass.length < 6) {
      res.send({Error:"Password length should be more that 6 characters." });
      console.log("password length less than 6");
    }
    else {
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
    }
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(403)
      res.send({ message: "User already exists" });
      console.log("unique email expected");
    } else {
      res.status(500)
      res.send({ status: 'error', message: "Something went wrong" });
    }
  }
}
