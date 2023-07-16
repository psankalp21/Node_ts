import { Follow } from '../database/follow_models';

export async function unfollow(uemail: string, target_email: string): Promise<any> {
  const existingFollow = await Follow.findOne({
    where: {
      user_email: uemail,
      following_email: target_email,
    },
  });

  if (!existingFollow) {
    throw new Error('You are not following this user');
  }

  await Follow.destroy({
    where: {
      user_email: uemail,
      following_email: target_email,
    },
  });
}
