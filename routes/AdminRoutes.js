const express = require("express");

const router = express.Router();
const AdminController = require("../controllers/AdminController");

router.post("/registerStudent", AdminController.registerStudent);
router.post("/registerLecturer", AdminController.registerLecturer);
router.post("/addCourse", AdminController.addCourse);

module.exports = router;
