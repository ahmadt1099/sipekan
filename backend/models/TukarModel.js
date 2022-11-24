import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Hadiah from './HadiahModel.js';
import User from './Usermodel.js';

const { DataTypes } = Sequelize;

const Tukar = db.define(
  'Tukar',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pesan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    hadiahId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Tukar.belongsTo(Hadiah, { foreignKey: 'hadiahId' });
Tukar.belongsTo(User, { foreignKey: 'userId' });

export default Tukar;
