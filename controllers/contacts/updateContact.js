const contacts = require("../../models/contacts");
const { contactDiagram } = require("../../Diagram/contactDiagram");
const { linkError } = require("../../helpers/linkError");

const updateContact = async (req, res, next) => {
  try {
    const { error } = contactDiagram.validate(req.body);
    if (error) {
      throw linkError(400, "Missing fields");
    }
    const { id } = req.params;
    const data = await contacts.updateContact(id, req.body);
    if (!data) {
      throw linkError(404, "Not found");
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
