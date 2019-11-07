const express = require("express");

const router = express.Router();
const LecturerController = require("../controllers/LecturerController");

router.post("/lecturerLogin", LecturerController.login);
router.post("/createAnnoucement", LecturerController.createAnnouncement);
router.get("/mycourses/:lecturerId", LecturerController.mycourses);
router.get("/lecturers", LecturerController.lecturers);

module.exports = router;
