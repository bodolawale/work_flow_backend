const express = require("express");

const router = express.Router();
const AdminController = require("../controllers/AdminController");

router.post("/registerStudent", AdminController.registerStudent);
router.post("/registerLecturer", AdminController.registerLecturer);
router.post("/addCourse", AdminController.addCourse);
router.post("/assignLecturer", AdminController.assignLecturer);
router.post("/createAnnoucement", AdminController.createAnnouncement);
router.post("/adminLogin", AdminController.login);

module.exports = router;
