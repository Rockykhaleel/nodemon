const express = require("express");
const router = express.Router();

const controller = require("../controller/usercontroller");

router.get("/new", controller.newuser);

module.exports = router;
