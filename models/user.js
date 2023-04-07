const {Schema, model} = require('mongoose')

const userSchema = new Schema({
        password: {
          type: String,
          required: [true, 'Set password for user'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        avatarUrl: String,
        token: String,
        verify: {
            type: Boolean,
            default: false,
          },
        verificationToken: {
            type: String,
            required: [true, 'Verify token is required'],
          },
})

userSchema.post("save", (err, data, next) => {
  const {name, code} = err
  err.status = (name === "MongoServerError" && code === 11000) ? 409 : 400
  next()
})
const User = model("user", userSchema)

module.exports = User