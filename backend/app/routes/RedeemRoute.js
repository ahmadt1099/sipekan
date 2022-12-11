module.exports = app => {
  const redeem = require("../controllers/Redeem.js");
  const { verifyUser, adminOnly, userOnly } = require("../middleware/Auth.js")

  var router = require("express").Router();

  router.post("/redeem/:id", verifyUser, userOnly, redeem.create);
  router.get("/redeem/:id", verifyUser, redeem.findOne);
  router.get("/redeem", verifyUser, redeem.getAll);
  router.patch("/redeem/:id", verifyUser, adminOnly, redeem.update);
  router.delete("/redeem/:id", verifyUser, adminOnly, redeem.delete);

  app.use(router);
};
