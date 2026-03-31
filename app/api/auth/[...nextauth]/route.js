import { connectDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sesstionUser = await User.findOne({ email: session.user.email });
      session.user.id = sesstionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectDB();
        const userExists = await User.findOne({ email: profile.email });
        if (!userExists) {
          const newUser = await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
          session.user = newUser;
        }
        return true;
      } catch (err) {
        console.log("error connecting", err);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
