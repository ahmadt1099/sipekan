import { Sequelize } from 'sequelize';

const db = new Sequelize('sipekan_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
