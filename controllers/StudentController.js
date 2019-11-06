const Course = require("../models/Course");
const User = require("../models/User");

class LecturerController {
    static async courseRegister(req, res) {
        try {
            const { courseId, studentId } = req.body;
            const course = await Course.updateOne({ _id: courseId }, { $push: { students: studentId } });
            return res.status(200).send({ message: "Course registered successfully!", course });
        } catch (error) {
            return res.status(500).send({ message: "Error registering Course" });
        }
    }

    static async login(req, res) {
        try {
            const { matric, password } = req.body;
            const student = await User.findOne({ matric, password, role: "student" });
            if (!student) {
                return res.status(404).send({ message: "Invalid Credentials" });
            }
            return res.status(200).send({ message: "Student login successfully!", student });
        } catch (error) {
            return res.status(500).send({ message: "Error logging student" });
        }
    }

    static async myCourses(req, res) {
        try {
            const { studentId } = req.params;
            const courses = await Course.find({ students: { $in: studentId } }).populate("lecturer").populate("students");
            return res.status(200).send({ message: "Courses retrived successfully!", courses });
        } catch (error) {
            return res.status(500).send({ message: "Error retriving Courses" });
        }
    }
}

module.exports = LecturerController;
