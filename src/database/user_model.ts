import { DataTypes, Model, Sequelize } from 'sequelize';
import { Follow } from './follow_models';

interface UserAttributes {
  email: string;
  name: string;
  password: string;
  dob: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public email!: string;
  public name!: string;
  public password!: string;
  public dob!: string;
}

const sequelize = new Sequelize('nodejsapi', 'postgres', '2201', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 1000,
    acquire: 30000,
  },
});

User.init(
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'user',
    timestamps: false,
  }
);

User.hasMany(Follow, { foreignKey: 'user_email', as: 'follows' });
Follow.belongsTo(User, { foreignKey: 'user_email' });

export { User, sequelize };
