const express = require("express");
const path = require("path");
const members = require("./Members");

const app = express();

// Gets all members
app.get("/api/members", (_req, res) => res.json(members));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

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
