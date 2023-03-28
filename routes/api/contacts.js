const express = require('express')
const authenticate = require('../../middlewares/authenticate')
const { isValid } = require('../../middlewares/index')
const ctrl = require('../../controllers/contacts/index')

const router = express.Router()


router.get('/', authenticate, ctrl.getContacts)

router.get('/:id', authenticate, isValid, ctrl.getContactById)

router.post('/', authenticate, ctrl.postContact)

router.delete('/:id', authenticate, isValid, ctrl.deleteContact )

router.put('/:id', authenticate, isValid, ctrl.updateContact)

router.patch('/:id/favorite', authenticate, isValid, ctrl.updateFavoruteContact)

module.exports = router
