import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler =  NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
          
        }

        throw new Error(user.message || "Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.token = user.token;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token,user }) {
      session.user = {
        id: token.id || null,
        token: token.token || null,
        firstName: token.firstName || null,
        lastName: token.lastName || null,
        email: token.email || null,
      };
      return session;
    },
  },
  secret: 'PLijjf544#$#$#$$$$',
});

export {handler as GET, handler as POST}
