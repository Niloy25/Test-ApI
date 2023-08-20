const express = require("express");
const router = express.Router();
const { upload } = require("../../middlewares/common.middleware");

const categoryController = require("../../controllers/category.controller");

router.route("/category/list").get(categoryController.list);
router
  .route("/category/add")
  .post(upload.array("categoryImage"), categoryController.add);

module.exports = router;
