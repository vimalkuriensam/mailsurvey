const express = require("express");

const apiRouter = express.Router();

apiRouter.get("/current_user", (req, res) => {
  res.send(req.user);
});

apiRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = apiRouter;
