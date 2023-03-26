const bcrypt = require("bcrypt");
const { registerSchema } = require("../../shemas/shemaUsers");
const User = require("../../models/user");
const { HttpError } = require("../../helpers/index");

const saltRounds = 10;

const registerUser = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "missing requires name field");
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, "Email in use");
    }
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });

    res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = registerUser;
