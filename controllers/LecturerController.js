const User = require("../models/User");
const Announcement = require("../models/Announcement");
const Course = require("../models/Course");

class LecturerController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const lecturer = await User.findOne({ email, password, role: "lecturer" });
            if (!lecturer) {
                return res.status(404).send({ message: "Invalid credentials" });
            }
            return res.status(200).send({ message: "Lecturer login successfully!", lecturer });
        } catch (error) {
            return res.status(500).send({ message: "Error logging Lecturer" });
        }
    }

    static async createAnnouncement(req, res) {
        try {
            const {
                title, details, createdBy, courseId,
            } = req.body;
            const announcement = new Announcement({
                title,
                details,
                createdBy,
                course: courseId,
                isGeneral: false,
                createdAt: Date.now(),
            });
            await announcement.save();
            return res.status(200).send({ message: "Announcement created successfully!", announcement });
        } catch (error) {
            return res.status(500).send({ message: "Error creating Announcement" });
        }
    }

    static async mycourses(req, res) {
        try {
            const { lecturerId } = req.params;
            const courses = await Course.find({ lecturer: lecturerId }).populate("students");
            return res.status(200).send({ message: "Courses retrived successfully!", courses });
        } catch (error) {
            return res.status(500).send({ message: "Error retriving Courses" });
        }
    }

    static async lecturers(req, res) {
        try {
            const lecturers = await User.find({ role: "lecturer" });
            return res.status(200).send({ message: "Lecturer retrived successfully!", lecturers });
        } catch (error) {
            return res.status(500).send({ message: "Error retriving Lecturers" });
        }
    }
}

module.exports = LecturerController;
