const express = require("express");

const router = express.Router();
const LecturerController = require("../controllers/LecturerController");

router.post("/createAnnoucement", LecturerController.createAnnouncement);
router.post("/lecturerLogin", LecturerController.login);

module.exports = router;
