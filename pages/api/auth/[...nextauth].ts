import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "ckZsM01JZUZIU21pSkRLS2ZHWDQ6MTpjaQ",
      clientSecret:
        process.env.TWITTER_CLIENT_SECRET ?? "web45Henf4OVzDDmRE49GYT4dw9wm5atzXKbTf0ea1NE0aq6-N",
      version: "2.0",
    }),
    // ...add more providers here
  ],
});
