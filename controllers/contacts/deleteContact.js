const contacts = require("../../models/contacts");
const { linkError } = require("../../helpers/linkError");

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeContact = await contacts.removeContact(id);
    if (!removeContact) {
      throw linkError(404, "Not found");
    }
    res.status(200).json({
      message: "Contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
