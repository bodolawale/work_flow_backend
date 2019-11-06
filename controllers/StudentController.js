const Course = require("../models/Course");

class LecturerController {
    static async courseRegister(req, res) {
        try {
            const { courseId, studentId } = req.body;
            const course = await Course.updateOne({ id: courseId }, { $push: { student: studentId } });
            return res.status(200).send({ message: "Announcement created successfully!", course });
        } catch (error) {
            return res.status(500).send({ message: "Error creating Announcement" });
        }
    }
}

module.exports = LecturerController;
