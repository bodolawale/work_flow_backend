const Announcement = require("../models/Announcement");

class AnnouncemetController {
    static async getGeneralAnnouncement(req, res) {
        try {
            const announcement = await Announcement.find({ isGeneral: true }).populate("createdBy");
            return res.status(200).send({ message: "Announcements recieved successfully", announcement });
        } catch (error) {
            return res.status(500).send({ message: "Error retriving announcements" });
        }
    }

    static async getCourseAnnouncement(req, res) {
        try {
            const { courseId } = req.params;
            const announcement = await Announcement.find({ isGeneral: false, course: courseId }).populate("createdBy");
            return res.status(200).send({ message: "Announcements recieved successfully", announcement });
        } catch (error) {
            return res.status(500).send({ message: "Error retriving announcements" });
        }
    }
}

module.exports = AnnouncemetController;
