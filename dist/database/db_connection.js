"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = {};
const dbConn = new sequelize_1.Sequelize('nodejsapi', 'postgres', '2201', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 1000,
        acquire: 30000
    }
});
dbConn.authenticate()
    .then(() => {
    console.log('Connection successful');
})
    .catch((err) => {
    console.log('Unable to connect:', err);
});
db.dbConn = dbConn;
db.DataTypes = sequelize_1.DataTypes;
//# sourceMappingURL=db_connection.js.map