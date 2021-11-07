const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const app = express();

// Init middleware
// app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use("/api/members", require("./routes/api/members"));

// Set routes manually
// app.get("/", (_req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // This route fixes the 404 message on the browser console
// app.get("/images/favicon.ico", (_req, res) => {
//   res.sendFile(path.join(__dirname, "images", "favicon.ico"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Stopped @ 16:11
