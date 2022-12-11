module.exports = app => {
  const submit = require("../controllers/Submit.js");
  const { verifyUser, adminOnly, userOnly } = require("../middleware/Auth.js")

  var router = require("express").Router();

  router.post("/submit/:id", verifyUser,userOnly, submit.create);
  router.get("/submit/:id", verifyUser, submit.findOne);
  router.get("/submited",verifyUser, submit.getAll);
  router.patch("/submit/:id", verifyUser, adminOnly, submit.update);
  router.delete("/submit/:id", verifyUser, adminOnly, submit.delete);

  app.use(router);
};
