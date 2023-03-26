const express = require("express")
const ctrl = require('../../controllers/users/index')
const { authenticate } = require('../../middlewares/index')

const router = express.Router()

router.post('/register', ctrl.postUser)
router.post('/login', ctrl.loginUser)
router.post('/current', authenticate, ctrl.postCurrent)
router.post('/logout', authenticate, ctrl.logoutUser)
router.patch('', authenticate, ctrl.updateSubscrUser)

module.exports = router