const Contact = require("../../models/contacts");

const getContacts = async (req, res, next) => {
  try {
    const data = await Contact.find({});
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = getContacts;
