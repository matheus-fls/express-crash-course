const express = require("express");
const path = require("path");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Set routes manually
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // This route fixes the 404 message on the browser console
// app.get("/images/favicon.ico", (req, res) => {
//   res.sendFile(path.join(__dirname, "images", "favicon.ico"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Stopped @ 16:11
