const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  categoryImage: [
    {
      img: {
        type: String,
      },
    },
  ],
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
