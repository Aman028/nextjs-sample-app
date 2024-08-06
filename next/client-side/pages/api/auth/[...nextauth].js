import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23liPxNRO7D1bWO4fV",
      clientSecret: "72229247f5a9cd017ed3e37b0a7d5b0f31aadb5c",
    }),
  ],
};

export default nextAuth(authOptions);
