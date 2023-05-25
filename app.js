const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.get("/", (req, res) => {
    res.render("profilepage");
});

app.listen(2000, () => {
    console.log("connected");
});