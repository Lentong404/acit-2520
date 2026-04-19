import express from "express";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";

router.get("/", (req, res) => {
  res.send(
    `<pre>If you want to visit the login page, go to <a href='/auth/login'>Login</a>. For the dashboard, go to <a href='/dashboard'>Dashboard</a> (Requires you to be logged in)</pre>`,
  );
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

export default router;
