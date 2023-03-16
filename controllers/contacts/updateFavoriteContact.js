const { updateFavoriteDiagram } = require("../../Diagram/contactDiagram");
const Contact = require("../../models/contacts");
const { linkError } = require("../../helpers/linkError");

const updateFavoruteContact = async (req, res, next) => {
  try {
    const { error } = updateFavoriteDiagram.validate(req.body);
    if (error) {
      throw HttpError(400, "Missing field favorite");
    }
    const { id } = req.params;
    const data = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!data) {
      throw linkError(404, "Not found");
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavoruteContact;
