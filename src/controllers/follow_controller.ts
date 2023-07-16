import { Request, Response } from 'express';
import { follow } from '../services/follow_service';
import { User } from '../database/user_model';

export async function follow_controller(req: Request, res: Response): Promise<void> {
  try {
    const { user_email, following_email } = req.body;

    // Check if the user being followed exists
    const followingUser = await User.findOne({
      where: {
        email: following_email,
      },
    });

    if (!followingUser) {
      res.status(404).json({ message: "User does not exist" });
      return;
    }

    await follow(user_email, following_email);

    res.json({ message: `You followed ${following_email}` });
  } catch (error) {
    console.log(`error ${error}`);

    if (error.message === 'Already following') {
      res.status(403);
      res.send({ message: "Already Following" });
      console.log("Already following");
    } else {
      res.status(500);
      res.send({ status: 'error', message: "Something went wrong" });
    }
  }
}
