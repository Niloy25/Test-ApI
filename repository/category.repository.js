const Category = require("../models/category.model");

exports.list = async (params) => {
  try {
    const allCategory = await Category.find();
    if (allCategory) {
      return {
        status: 201,
        message: "Category list fetched",
        data: allCategory,
      };
    } else {
      return { status: 400, message: "Something went wrong" };
    }
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

exports.add = async (req) => {
  try {
    const categoryObj = {
      name: req.body.name,
      status: req.body.status,
    };

    if (req.files.length > 0) {
      const imgArr = req.files.map((file) => {
        const filePath = process.env.API + "/public/" + file.filename;
        return { img: filePath };
      });
      categoryObj.categoryImage = imgArr;
    }
    const category = await new Category(categoryObj).save();
    if (category) {
      return {
        status: 201,
        message: "Category created successfully",
        data: category,
      };
    } else {
      return { status: 400, message: "Something went wrong" };
    }
  } catch (error) {
    return { status: 500, message: error.message };
  }
};
