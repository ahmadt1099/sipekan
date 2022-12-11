module.exports = app => {
  const auth = require("../controllers/Auth.js");

  var router = require("express").Router();

  router.post("/login", auth.Login);
  router.get("/me", auth.Me);
  router.post("/register", auth.Register);
  router.delete("/logout", auth.Logout);

  app.use(router);
};
