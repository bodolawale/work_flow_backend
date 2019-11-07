const express = require("express");

const router = express.Router();
const AnnouncementController = require("../controllers/AnnouncementController");

router.get("/getGeneralAnnouncement", AnnouncementController.getGeneralAnnouncement);
router.get("/getCourseAnnouncement/:courseId", AnnouncementController.getCourseAnnouncement);

module.exports = router;
