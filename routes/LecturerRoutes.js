const express = require("express");

const router = express.Router();
const LecturerController = require("../controllers/LecturerController");

router.post("/createAnnoucement", LecturerController.createAnnouncement);

module.exports = router;
