"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = exports.Follow = void 0;
const sequelize_1 = require("sequelize");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_1.Sequelize; } });
const user_model_1 = require("./user_model");
class Follow extends sequelize_1.Model {
}
exports.Follow = Follow;
Follow.init({
    user_email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: user_model_1.User,
            key: 'email',
        },
    },
    following_email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: new sequelize_1.Sequelize('nodejsapi', 'postgres', '2201', {
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
});
//# sourceMappingURL=follow_models.js.map