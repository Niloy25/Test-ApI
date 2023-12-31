const multer = require("multer");
const path = require("path");
const shoirtid = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, shoirtid.generate() + "-" + file.originalname);
  },
});

exports.upload = multer({ storage: storage });
