var express = require("express");
var router = express.Router();
var async = require("async");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/:page", (req, res, next) => {
  res.render(req.params.page, { page: req.params.page });
});

module.exports = router;
