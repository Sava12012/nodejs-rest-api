const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("models", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};
const getContactById = async (contactId) => {
  const contactsArr = await listContacts(contactsPath);
  const oneContact = contactsArr.find((item) => item.id === contactId);
  return oneContact || null;
};
const addContact = async ({ name, email, phone }) => {
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  const contactsArr = await listContacts(contactsPath);
  contactsArr.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactsArr, null, 2));
  return newContact;
};

const removeContact = async (contactId) => {
  const contactsArr = await listContacts(contactsPath);
  const indexRemoveContact = contactsArr.findIndex(
    (item) => item.id === contactId
  );
  if (indexRemoveContact === -1) {
    return null;
  }
  const [result] = contactsArr.splice(indexRemoveContact, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsArr, null, 2));
  return result;
};
const updateContact = async (contactId, body) => {
  const contactsArr = await listContacts(contactsPath);
  const indexUpdateContact = contactsArr.findIndex(
    (item) => item.id === contactId
  );
  if (indexUpdateContact === -1) {
    return null;
  }
  contactsArr[indexUpdateContact] = {
    contactId,
    ...body,
  };
  await fs.writeFile(contactsPath, JSON.stringify(contactsArr, null, 2));
  return contactsArr[indexUpdateContact];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
