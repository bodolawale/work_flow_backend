const express = require("express");

const router = express.Router();
const CourseController = require("../controllers/CourseController");

router.get("/", CourseController.getAllCourses);

module.exports = router;
