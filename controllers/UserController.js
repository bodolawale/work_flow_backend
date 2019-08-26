const User = require("../models/User");

class UserController {
    static async register(req, res) {
        const { name, password, email } = req.body;
        const user = new User({
            name,
            email,
            password,
        });
        await user.save();
        return res.send({ message: "You tried to register", user });
    }
}

module.exports = UserController;
