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
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard" });
});

router.post("/new", function (req, res, next) {
  const message = req.body.messageText;
  const user = req.body.user;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
