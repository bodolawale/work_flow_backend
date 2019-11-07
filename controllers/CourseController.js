const Course = require("../models/Course");

class CourseController {
    static async getAllCourses(req, res) {
        try {
            const course = await Course.find({}).populate("lecturer").populate("students");
            return res.status(200).send({ message: "Courses recieved successfully", course });
        } catch (error) {
            return res.status(500).send({ message: "Error retriving courses" });
        }
    }
}

module.exports = CourseController;
