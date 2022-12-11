module.exports = app => {
  const reward = require("../controllers/Reward.js");
  const { verifyUser, adminOnly } = require("../middleware/Auth.js")

  var router = require("express").Router();

  router.post("/reward", verifyUser, adminOnly, reward.create);
  router.get("/reward/:id", verifyUser, reward.findOne);
  router.get("/reward", verifyUser, reward.getAll);
  router.patch("/reward/:id", verifyUser, adminOnly, reward.update);
  router.delete("/reward/:id", verifyUser, adminOnly, reward.delete);

  app.use(router);
};
