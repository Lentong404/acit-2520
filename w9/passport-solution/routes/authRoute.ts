import express from "express";
import passport from "passport";
import { forwardAuthenticated } from "../middleware/checkAuth";

const router = express.Router();

router.get("/login", forwardAuthenticated, (req, res) => {
  // Pull any failure messages stored in the session by Passport's failureMessage option
  const messages = req.session.messages || [];
  req.session.messages = []; // Clear them after reading so they don't persist
  res.render("login", { messages });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureMessage: true, // Stores the strategy's failure message in req.session.messages
  }),
);

// Step 1: Send user to GitHub to authorize
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
);

// Step 2: GitHub redirects back here with a code; exchange it for a profile
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureMessage: true,
  }),
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
  });
  res.redirect("/auth/login");
});

export default router;
