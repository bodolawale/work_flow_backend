const express = require("express");

const router = express.Router();
const AnnouncemetController = require("../controllers/AnnouncementController");

router.get("/getGeneralAnnouncement", AnnouncemetController.getGeneralAnnouncement);
router.get("/getCourseAnnouncement/:courseId", AnnouncemetController.getCourseAnnouncement);

module.exports = router;
