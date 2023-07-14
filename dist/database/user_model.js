"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dob: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    sequelize: new sequelize_1.Sequelize('nodejsapi', 'postgres', '2201', {
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
});
//# sourceMappingURL=user_model.js.map