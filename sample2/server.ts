import express from "express";
import path from "node:path";
import morgan from "morgan";
import { addTip, dislike, getTips, like, remove } from "./data";

const app = express();
const PORT = 3000;

// Use EJS Instead of HTML
app.set("view engine", "ejs");

// Use Morgan for Logging
app.use(morgan("dev"));

// Get Access to Incoming Form Data using req.body
app.use(express.urlencoded({ extended: true }));

// Serve static content like css or site logo from public
app.use(express.static("public"));

app.get("/", (req, res) => {
  const tips = getTips();
  res.render("index", { tips });
});

// Create
app.post("/tips", (req, res) => {
  // TODO: 🚀 Get incoming tip text from form
  // TODO: 🚀 Check if it's empty.
  // TODO: 🚀 If it's not empty, send it to addTip() function.
  // TODO: 🚀 redirect to homepage
  const tipText = req.body.text;
  if (tipText) {
    addTip(tipText);
    res.redirect("/");
  }
});

// Like/Dislike/Delete
app.post("/tips/:id/like", (req, res) => {
  // TODO: 🚀 get id from url params and feed to like function
  // TODO: 🚀 redirect to homepage
  const id = req.url.split("/")[2];
  if (id) like(id);
  res.redirect("/");
});

app.post("/tips/:id/dislike", (req, res) => {
  // TODO: 🚀 get id from url params and feed to dislike function
  // TODO: 🚀 redirect to homepage
  const id = req.url.split("/")[2];
  if (id) dislike(id);
  res.statusCode = 302;
  res.redirect("/");
});

app.post("/tips/:id/delete", (req, res) => {
  // TODO: 🚀 get id from url params and feed to delete function
  // TODO: 🚀 redirect to homepage
  const id = req.url.split("/")[2];
  if (id) remove(id);
  res.statusCode = 302;
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`
🚀 http://localhost:${PORT}`);
});
