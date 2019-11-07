const express = require("express");

const router = express.Router();
const StudentController = require("../controllers/StudentController");

router.post("/courseRegister", StudentController.courseRegister);
router.post("/studentLogin", StudentController.login);
router.get("/myCourses/:studentId", StudentController.myCourses);
router.get("/students", StudentController.students);

module.exports = router;
