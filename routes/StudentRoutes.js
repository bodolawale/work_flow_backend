const express = require("express");

const router = express.Router();
const StudentController = require("../controllers/StudentController");

router.post("/courseRegister", StudentController.courseRegister);
router.post("/studentLogin", StudentController.login);

module.exports = router;
