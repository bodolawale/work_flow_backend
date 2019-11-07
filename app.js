const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes/UserRoutes");
const AdminRoutes = require("./routes/AdminRoutes");
const LecturerRoutes = require("./routes/LecturerRoutes");
const StudentRoutes = require("./routes/StudentRoutes");
const AnnouncementRoutes = require("./routes/AnnouncementRoutes");

// Load config
dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());

app.use(helmet());

require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Dev logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/admin", AdminRoutes);
app.use("/api/v1/lecturer", LecturerRoutes);
app.use("/api/v1/student", StudentRoutes);
app.use("/api/v1/announcement", AnnouncementRoutes);
app.use((req, res) => { res.status(404).json("URl not found"); });

const { PORT } = process.env || 8000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
