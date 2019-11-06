const Course = require("../models/Course");
const User = require("../models/User");

class LecturerController {
    static async courseRegister(req, res) {
        try {
            const { courseId, studentId } = req.body;
            const course = await Course.updateOne({ id: courseId }, { $push: { student: studentId } });
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
                return res.status(404).send({ message: "Student not found" });
            }
            return res.status(200).send({ message: "Student login successfully!", student });
        } catch (error) {
            return res.status(500).send({ message: "Error logging student" });
        }
    }
}

module.exports = LecturerController;
