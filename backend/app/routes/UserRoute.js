module.exports = app => {
  const user = require("../controllers/User.js");
  const { verifyUser, adminOnly } = require("../middleware/Auth.js")

  var router = require("express").Router();

  router.post("/user", verifyUser, adminOnly, user.create);
  router.get("/user/:id", verifyUser, adminOnly, user.findOne);
  router.get("/user", verifyUser, adminOnly, user.getAll);
  router.patch("/user/:id", verifyUser, adminOnly, user.update);
  router.delete("/user/:id", verifyUser, adminOnly, user.delete);

  app.use(router);
};
