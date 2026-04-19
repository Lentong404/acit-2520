import { Strategy as GitHubStrategy } from "passport-github2";
import type { Request } from "express";
import type { Profile as GitHubProfile } from "passport-github2";
import * as OAuth2Strategy from "passport-oauth2";
import { PassportStrategy } from "../../interfaces/index";
import { database } from "../../models/userModel";

const githubStrategy: GitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
    callbackURL: process.env.CALLBACK_URL || "",
    passReqToCallback: true,
  },
  async (
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: GitHubProfile,
    done: OAuth2Strategy.VerifyCallback,
  ) => {
    // Check if a user with this GitHub id already exists in our fake database
    const existingUser = database.find(
      (user: any) => user.githubId === profile.id,
    );

    if (existingUser) {
      // User has logged in with GitHub before — just return them
      return done(null, existingUser);
    }

    // First-time GitHub login — create a new user entry in our fake database
    const newUser: any = {
      id: database.length + 1,           // Simple auto-increment id
      githubId: profile.id,              // Store GitHub's unique id
      name: profile.displayName || profile.username || "GitHub User",
      avatarUrl: profile.photos?.[0]?.value || null,
      username: profile.username,
      // No email/password — GitHub handles authentication for this user
    };

    database.push(newUser);
    return done(null, newUser);
  },
);

const passportGitHubStrategy: PassportStrategy = {
  name: "github",
  strategy: githubStrategy,
};

export default passportGitHubStrategy;
