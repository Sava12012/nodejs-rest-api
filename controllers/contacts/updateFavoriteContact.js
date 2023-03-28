const { updateFavoriteSchema } = require('../../shemas/shemaContacts')
const Contact = require('../../models/contact')
const {HttpError} = require('../../helpers/index')


const updateFavoruteContact = async (req, res, next) => {
    try {
      const {error} = updateFavoriteSchema.validate(req.body)
      if (error) {
        throw HttpError(400, "Missing field favorite")
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

  module.exports = updateFavoruteContact