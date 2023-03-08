const contacts = require('../../models/contacts')

const getContacts = async (req, res, next) => {
    try {
      const data = await contacts.listContacts()
      res.status(200).json(data)
    } 
    catch (error) {
      next(error)
    }
  }

module.exports = getContacts