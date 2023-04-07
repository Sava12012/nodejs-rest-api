const Joi = require('joi')

const registerSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    subscription: Joi.string()
  });

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().email().required()
  });

const verifyEmailSchema = Joi.object({
  email: Joi.string().email().required()
})

const listSubscr = ['starter', 'pro', 'business']

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...listSubscr).required()
})

  module.exports = {
    registerSchema,
    loginSchema,
    updateSubscriptionSchema,
    verifyEmailSchema,
  }