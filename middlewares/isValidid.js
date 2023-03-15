const { isValidObjectId } = require("mongoose");
const { linkError } = require("../helpers/linkError");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(linkError(404, "Invalid id"));
  }
  next();
};

module.exports = isValidId;
