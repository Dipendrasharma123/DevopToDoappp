const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = [];

app.get("/", (req, res) => {
  res.render("index", { todos });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  if (task) {
    todos.push(task);
  }
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const index = req.body.index;
  todos.splice(index, 1);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});