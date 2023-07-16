import { Follow } from '../database/follow_models';
import { User, sequelize } from '../database/user_model';
import { Op } from 'sequelize';

export async function search(target_name: string): Promise<any> {
  try {
    console.log("search services called");
    const users = await User.findAll({
      where: {
        name: {
          [Op.like]: `%${target_name}%`,
        },
      },
      include: [
        {
          model: Follow,
          as: 'follows',
          attributes: ['following_email'],
        },
      ],
    });

    return users;
  } catch (error) {
    console.log("failed to search users", error.message);
    throw new Error('Failed to search users');
  }
}
