const User = require("../models/User");
const Course = require("../models/Course");
const Announcement = require("../models/Annoucement");

class AdminController {
    static async registerStudent(req, res) {
        try {
            const {
                name, password, email, matric,
            } = req.body;
            if (!matric) {
                return res.status(400).send({ message: "Matric Required" });
            }
            const student = new User({
                name,
                email,
                password,
                role: "student",
                matric,
            });
            await student.save();
            return res.status(200).send({ message: "Student registerd successfully!", student });
        } catch (error) {
            return res.status(500).send({ message: "Error creating Student!" });
        }
    }

    static async registerLecturer(req, res) {
        try {
            const {
                name, password, email, matric,
            } = req.body;
            if (!email) {
                return res.status(400).send({ message: "Email Required" });
            }
            const lecturer = new User({
                name,
                email,
                password,
                role: "lecturer",
                matric,
            });
            await lecturer.save();
            return res.status(200).send({ message: "Lecturer registerd successfully!", lecturer });
        } catch (error) {
            return res.status(500).send({ message: "Error creating Lecturer!" });
        }
    }

    static async addCourse(req, res) {
        try {
            const {
                name, code, title,
            } = req.body;
            const course = new Course({
                name,
                code,
                title,
            });
            await course.save();
            return res.status(200).send({ message: "Course added successfully!", course });
        } catch (error) {
            return res.status(500).send({ message: "Error adding course" });
        }
    }

    static async assignLecturer(req, res) {
        try {
            const {
                courseId, lecturerId,
            } = req.body;
            const course = await Course.updateOne({ id: courseId }, { lecturer: lecturerId });
            return res.status(200).send({ message: "Lecturer added successfully!", course });
        } catch (error) {
            return res.status(500).send({ message: "Error adding Lecturer" });
        }
    }

    static async createAnnouncement(req, res) {
        try {
            const {
                title, details, createdBy,
            } = req.body;
            const announcement = new Announcement({
                title,
                details,
                createdBy,
                isGeneral: true,
                createdAt: Date.now(),
            });
            await announcement.save();
            return res.status(200).send({ message: "Announcement created successfully!", announcement });
        } catch (error) {
            return res.status(500).send({ message: "Error creating Announcement" });
        }
    }
}

module.exports = AdminController;
