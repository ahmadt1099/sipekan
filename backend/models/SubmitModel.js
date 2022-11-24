import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Tugas from './Tugasmodel.js';
import User from './Usermodel.js';

const { DataTypes } = Sequelize;

const Submit = db.define(
  'Submit',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    komentar: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url: {
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
    tugasId: {
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

Submit.belongsTo(Tugas, { foreignKey: 'tugasId' });
Submit.belongsTo(User, { foreignKey: 'userId' });

export default Submit;
