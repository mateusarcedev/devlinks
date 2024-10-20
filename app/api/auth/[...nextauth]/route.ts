import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";
import { AxiosConfig } from "../../../utils/axiosConfig";

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { id, name, email, avatar_url }: any = profile;

      try {
        const res = await AxiosConfig.post('/users', {
          githubId: parseInt(id),
          name: name || "Unknown",
          email: email || "",
          avatar: avatar_url || "",
        });

        if (res.status === 200 || res.status === 201) {
          return true;
        } else {
          console.error("Erro ao salvar usuário no backend");
          return false;
        }
      } catch (error) {
        console.error("Erro ao conectar com o backend: ", error);
        return false;
      }
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.githubId = parseInt(profile.id);
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).githubId = (token as JWT & { githubId: number }).githubId;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(options);

// Exportando o handler como GET e POST
export { handler as GET, handler as POST };
