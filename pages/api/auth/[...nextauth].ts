import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "ckZsM01JZUZIU21pSkRLS2ZHWDQ6MTpjaQ",
      clientSecret:
        process.env.TWITTER_CLIENT_SECRET ?? "7Cr1aBRrAMuGqlI_FQQfGWyHkG7hFxIH97XGs9N7yQ72OYUjI8",
      version: "2.0",
    }),
    // ...add more providers here
  ],
});
