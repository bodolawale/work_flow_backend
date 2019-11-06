const express = require("express");

const router = express.Router();
const StudentController = require("../controllers/StudentController");

router.post("/courseRegister", StudentController.courseRegister);
router.post("/studentLogin", StudentController.login);
router.get("/myCourses/:studentId", StudentController.myCourses);

module.exports = router;
