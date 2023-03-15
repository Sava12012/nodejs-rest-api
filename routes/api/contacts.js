const express = require("express");
const isValid = require("../../middlewares/isValidid");
const controlRout = require("../../controllers/index");
const router = express.Router();

router.get("/", controlRout.getContacts);
router.get("/:id", isValid, controlRout.getContactById);
router.post("/", controlRout.postContact);
router.delete("/:id", isValid, controlRout.deleteContact);
router.put("/:id", isValid, controlRout.updateContact);
router.patch("/:id/favorite", isValid, controlRout.updateFavoruteContact);

module.exports = router;
