const Contacts = require("../../models/contacts");
const { linkError } = require("../../helpers/linkError");

const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    if (!contact) {
      throw linkError(404, "Contact is not found");
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
