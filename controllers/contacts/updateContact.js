const { schemaContact } = require('../../shemas/shemaContacts')
const Contact = require('../../models/contact')
const {HttpError} = require('../../helpers/index')


const updateContact = async (req, res, next) => {
    try {
      const {error} = schemaContact.validate(req.body)
      if (error) {
        throw HttpError(400, "Missing fields")
      }
      const {id} = req.params
      const data = await Contact.findByIdAndUpdate(id, req.body, {new: true})
      if(!data) {
        throw HttpError(404, "Not found")
      }
      res.status(200).json(data)
    }
    catch (error) {
      next(error)
    }
  }

  module.exports = updateContact