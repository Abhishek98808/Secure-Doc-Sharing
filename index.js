const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// ✅ Default route (serves login.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
