import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './user_model';

interface FollowAttributes {
  user_email: string;
  following_email: string;
}

class Follow extends Model<FollowAttributes> implements FollowAttributes {
  public user_email!: string;
  public following_email!: string;
}

Follow.init(
  {
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'email',
      },
    },
    following_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: new Sequelize('nodejsapi', 'postgres', '2201', {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 1000,
        acquire: 30000,
      },
    }),
    tableName: 'follow',
    timestamps: false,
  }
);

export { Follow , Sequelize};
