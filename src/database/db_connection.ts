import { Sequelize, DataTypes } from 'sequelize';

const db: any = {};
const dbConn = new Sequelize('nodejsapi', 'postgres', '2201', {
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
  .catch((err: Error) => {
    console.log('Unable to connect:', err);
  });

db.dbConn = dbConn;
db.DataTypes = DataTypes;

