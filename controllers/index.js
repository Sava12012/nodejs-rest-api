const getContacts = require("./contacts/getContacts");
const getContactById = require("./contacts/getContactById");
const postContact = require("./contacts/postContact");
const deleteContact = require("./contacts/deleteContact");
const updateContact = require("./contacts/updateContact");
const updateFavoruteContact = require("./contacts/updateFavoriteContact");

module.exports = {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  updateContact,
  updateFavoruteContact,
};
