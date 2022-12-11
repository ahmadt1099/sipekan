const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./UserModel.js")(sequelize, Sequelize);
db.task = require("./TaskModel.js")(sequelize, Sequelize);
db.submit = require("./SubmitModel.js")(sequelize, Sequelize);
db.reward = require("./RewardModel.js")(sequelize, Sequelize);
db.redeem = require("./RedeemModel.js")(sequelize, Sequelize);

db.user.hasMany(db.task);
db.task.belongsTo(db.user, { foreignKey: 'userId' });
db.submit.belongsTo(db.task, { foreignKey: 'taskId' });
db.submit.belongsTo(db.user, { foreignKey: 'userId' });
db.user.hasMany(db.reward);
db.reward.belongsTo(db.user, { foreignKey: 'userId' });
db.redeem.belongsTo(db.reward, { foreignKey: 'rewardId' });
db.redeem.belongsTo(db.user, { foreignKey: 'userId' });

module.exports = db;
