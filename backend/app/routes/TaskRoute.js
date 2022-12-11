module.exports = app => {
  const task = require("../controllers/Task.js");
  const { verifyUser, adminOnly } = require("../middleware/Auth.js")

  var router = require("express").Router();

  router.post("/tugas", verifyUser, adminOnly, task.create);
  router.get("/tugas/:id", verifyUser, task.findOne);
  router.get("/tugas", verifyUser, task.getAll);
  router.patch("/tugas/:id", verifyUser, adminOnly, task.update);
  router.delete("/tugas/:id", verifyUser, adminOnly, task.delete);

  app.use(router);
};
