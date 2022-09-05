import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
      version: "2.0",
    }),
    // ...add more providers here
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        // eslint-disable-next-line
        // @ts-ignore
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
});
