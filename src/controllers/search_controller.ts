import { Request, Response } from 'express';
import { search } from '../services/search_services';

export async function search_controller(req: Request, res: Response): Promise<void> {
  try {
    console.log("search controller called");
    const { name } = req.body;
    const users = await search(name);

    if (users.length === 0) {
      res.json({ result: "No user found" });
    } else {
      const formattedUsers = users.map(({ name, email, follows }) => ({
        name,
        email,
        following: follows ? follows.map((followedUser: any) => followedUser.following_email) : [],
      }));
      console.log("i got it here");
      res.json({ result: formattedUsers });
    }
  } catch (error) {
    console.log(error);
    res.send("Something went wrong");
  }
}
