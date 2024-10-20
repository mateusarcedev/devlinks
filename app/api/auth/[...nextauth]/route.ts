import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.githubId = profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).githubId = (token as JWT & { githubId: string }).githubId;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };