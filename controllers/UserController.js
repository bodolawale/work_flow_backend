const User = require("../models/User");

class UserController {
    static async register(req, res) {
        try {
            const {
                name, password, email, role, matric,
            } = req.body;
            const user = new User({
                name,
                email,
                password,
                role,
                matric,
            });
            await user.save();
            return res.status(200).send({ message: "You tried to register", user });
        } catch (error) {
            return res.status(500).send({ message: "Error creating user!" });
        }
    }
}

module.exports = UserController;
