const express = require("express");

const controlRout = require("../../controllers/index");
const router = express.Router();

router.get("/", controlRout.getContacts);
router.get("/:id", controlRout.getContactById);
router.post("/", controlRout.postContact);
router.delete("/:id", controlRout.deleteContact);
router.put("/:id", controlRout.updateContact);

module.exports = router;
