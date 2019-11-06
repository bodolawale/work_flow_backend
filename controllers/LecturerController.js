const Announcement = require("../models/Annoucement");

class LecturerController {
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
}

module.exports = LecturerController;
