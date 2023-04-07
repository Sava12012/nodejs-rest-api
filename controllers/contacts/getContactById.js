const Contact = require('../../models/contact')
const {HttpError} = require('../../helpers/index')

const getContactById = async (req, res, next) => {
    try {
      const {id} = req.params
      
      const contact = await Contact.findById(id)
      if(!contact) {
        throw HttpError(404, "Contact is not found")
      }
      res.status(200).json(contact)
    }
    catch (error) {
      next(error)
    }
  }

module.exports = getContactById