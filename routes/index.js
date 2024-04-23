const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Bellingham",
    added: new Date(),
  },
  {
    text: "HELLOOO WOORLDD",
    user: "Rodrygo",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard" });
});

module.exports = router;
