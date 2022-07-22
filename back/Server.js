const express = require("express");
const app = express();
const bodyParser = require("body-parser")

// app.get("/api", (req, res) => {
// res.send("Hello World!");
// });

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
