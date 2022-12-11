const user = require("./UserModel.js")
module.exports = (sequelize, Sequelize) => {
  const task = sequelize.define("task", {
    task_id: {
      type: Sequelize.STRING,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    submited: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    point: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
    {
      freezeTableName: true,
    });

  return task;
};