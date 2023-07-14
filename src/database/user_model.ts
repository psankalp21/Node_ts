import { DataTypes, Model, Sequelize } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  dob: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public dob!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    sequelize: new Sequelize('nodejsapi', 'postgres', '2201', {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 1000,
        acquire: 30000
      }
    }),
    tableName: 'user',
    timestamps: false
  }
);

export { User };
