const express = require("express");
const router = express.Router();

const categoryRoute = require("./v1/category.route");

router.use("/", categoryRoute);

module.exports = router;
