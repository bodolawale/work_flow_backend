const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");

// Load config
dotenv.config({ path: "./config.env" , });

const app = express();

app.use(helmet());

// Dev logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/", (req, res) => {
    res.send({message:"hello"})
})

// Profile Routes
// app.use("/api/v1/profile", require("./routes/profile"));

const { PORT, } = process.env || 8000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
