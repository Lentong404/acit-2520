import { Strategy as GitHubStrategy } from "passport-github2";
import type { Request } from "express";
import type { Profile as GitHubProfile } from "passport-github2";
import * as OAuth2Strategy from "passport-oauth2";
import { PassportStrategy } from "../../interfaces/index";

// TODO: Put your clientID, clientSecret, and callbackURL in .env
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
  ) => {},
);

const passportGitHubStrategy: PassportStrategy = {
  name: "github",
  strategy: githubStrategy,
};

export default passportGitHubStrategy;
