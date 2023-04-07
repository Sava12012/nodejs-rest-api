const getContacts = require('./getContacts')
const getContactById = require('./getContactById')
const postContact = require('./postContact')
const deleteContact = require('./deleteContact')
const updateContact = require('./updateContact')
const updateFavoruteContact = require('./updateFavoriteContact')

module.exports = {
    getContacts,
    getContactById,
    postContact,
    deleteContact,
    updateContact,
    updateFavoruteContact
}