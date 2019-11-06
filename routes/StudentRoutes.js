const express = require("express");

const router = express.Router();
const StudentController = require("../controllers/StudentController");

router.post("/courseRegister", StudentController.courseRegister);

module.exports = router;
