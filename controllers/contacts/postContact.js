const Contact = require("../../models/contacts");
const { contactDiagram } = require("../../Diagram/contactDiagram");
const { linkError } = require("../../helpers/linkError");

const postContact = async (req, res, next) => {
  try {
    const { error } = contactDiagram.validate(req.body);
    if (error) {
      throw linkError(400, "Missing required name field");
    }
    const data = await Contact.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = postContact;
