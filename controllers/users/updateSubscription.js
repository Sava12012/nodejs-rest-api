const { updateSubscriptionSchema } = require("../../shemas/shemaUsers");
const User = require("../../models/user");
const { HttpError } = require("../../helpers/index");

const updateSubscription = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const { error } = updateSubscriptionSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "Invalid field subscription");
    }
    const data = await User.findByIdAndUpdate(_id, req.body, { new: true });
    if (!data) {
      throw HttpError(404, "Not found user");
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;
