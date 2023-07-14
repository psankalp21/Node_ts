import { User } from '../database/user_model';

export async function loginservice(email: string, password: string): Promise<any> {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    return user;
  } catch (error) {
    throw new Error('An error occurred during login');
  }
}

module.exports=
{
  loginservice
}