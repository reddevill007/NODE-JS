const express = require("express");
const path = require("path");

const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // Serving Static Files

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "template")); // Set the view directory

// ENDPOINTS
app.get("/", (req, res) => {
  const con = "This is learning backend by me";
  const params = { title: "Code inertia", content: con };
  res.status(200).render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
  console.log(`The applicaton started successfully on port ${port}`);
});
