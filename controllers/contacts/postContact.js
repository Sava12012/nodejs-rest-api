const contacts = require("../../models/contacts");
const { contactDiagram } = require("../../Diagram/contactDiagram");
const { linkError } = require("../../helpers/linkError");

const postContact = async (req, res, next) => {
  try {
    const { error } = contactDiagram.validate(req.body);
    if (error) {
      throw linkError(400, "Missing required name field");
    }
    const data = await contacts.addContact(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = postContact;
