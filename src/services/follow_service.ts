import { Follow } from '../database/follow_models';
import { User } from '../database/user_model';

export async function follow(user_email: string, following_email: string): Promise<any> {
  const user = await User.findOne({
    where: {
      email: following_email,
    },
  });

  if (!user) {
    throw new Error('User does not exist');
  }

  const existingFollow = await Follow.findOne({
    where: {
      user_email,
      following_email,
    },
  });

  if (existingFollow) {
    throw new Error('Already following');
  }

  await Follow.create({
    user_email,
    following_email,
  });
}
