const repository = require("../repository/category.repository");

exports.list = async (req, res) => {
  let data = await repository.list(req.query);
  return res.status(data.status).send(data);
};
exports.add = async (req, res) => {
  if (req.body.id) delete req.body.id;
  let data = await repository.add(req);
  return res.status(data.status).send(data);
};
