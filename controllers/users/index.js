const postUser = require('./register')
const loginUser = require('./login')
const postCurrent = require('./postCurrent')
const logoutUser = require('./logout')
const updateSubscrUser = require('./updateSubscription')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resendVerify = require('./resendVerify')

module.exports = {
    postUser,
    loginUser,
    postCurrent,
    logoutUser,
    updateSubscrUser,
    updateAvatar,
    verifyEmail,
    resendVerify,
}