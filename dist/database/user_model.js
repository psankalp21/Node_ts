"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.User = void 0;
const sequelize_1 = require("sequelize");
const follow_models_1 = require("./follow_models");
class User extends sequelize_1.Model {
}
exports.User = User;
const sequelize = new sequelize_1.Sequelize('nodejsapi', 'postgres', '2201', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 1000,
        acquire: 30000,
    },
});
exports.sequelize = sequelize;
User.init({
    email: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'user',
    timestamps: false,
});
User.hasMany(follow_models_1.Follow, { foreignKey: 'user_email', as: 'follows' });
follow_models_1.Follow.belongsTo(User, { foreignKey: 'user_email' });
//# sourceMappingURL=user_model.js.map