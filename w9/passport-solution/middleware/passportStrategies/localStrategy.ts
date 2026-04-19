import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  getUserByEmailIdAndPassword,
  getUserById,
} from "../../controllers/userController";
import { PassportStrategy } from "../../interfaces/index";

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    try {
      // getUserByEmailIdAndPassword calls userModel.findOne, which throws if email not found
      const user = getUserByEmailIdAndPassword(email, password);
      if (user) {
        return done(null, user);
      }
      // Email exists but password is wrong
      return done(null, false, {
        message: "Password incorrect. Please try again.",
      });
    } catch (err: any) {
      // userModel.findOne throws when no user with that email exists
      if (err.message && err.message.includes("Couldn't find user with email")) {
        return done(null, false, {
          message: `No account found with email: ${email}`,
        });
      }
      return done(err);
    }
  },
);

passport.serializeUser<number>(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser<number>(function (id, done) {
  let user = getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

const passportLocalStrategy: PassportStrategy = {
  name: "local",
  strategy: localStrategy,
};

export default passportLocalStrategy;
