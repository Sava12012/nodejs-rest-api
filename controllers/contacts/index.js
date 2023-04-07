const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const postContact = require("./postContact");
const deleteContact = require("./deleteContact");
const updateContact = require("./updateContact");
const updateFavoruteContact = require("./updateFavoriteContact");
const verifyEmail = require("./verifyEmail");
const resendVerify = require("./resendVerify");

module.exports = {
  getContacts,
  getContactById,
  postContact,
  deleteContact,
  updateContact,
  updateFavoruteContact,
  verifyEmail,
  resendVerify,
};
