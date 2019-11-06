const express = require("express");

const router = express.Router();
const LecturerController = require("../controllers/LecturerController");

router.post("/lecturerLogin", LecturerController.login);
router.post("/createAnnoucement", LecturerController.createAnnouncement);
router.get("/mycourses/:lecturerId", LecturerController.mycourses);

module.exports = router;
