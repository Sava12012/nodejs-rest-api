const Joi = require("joi");

const contactDiagram = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteDiagram = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactDiagram,
  updateFavoriteDiagram,
};
