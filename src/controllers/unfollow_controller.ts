import { Request, Response } from 'express';
import { unfollow } from '../services/unfollow_service';

export async function unfollow_controller(req: Request, res: Response): Promise<void> {
  try {
    const { user_email, following_email } = req.body;
    await unfollow(user_email, following_email);

    res.json({ message: `You unfollowed ${following_email}` });
  } catch (error) {
    console.log(`error ${error}`);

    if (error.message === 'You are not following this user') {
      res.status(403);
      res.send({ message: "You are not following this user" });
      console.log("You are not following this user");
    } else {
      res.status(500);
      res.send({ status: 'error', message: "Something went wrong" });
    }
  }
}
