
import User from "../../../../models/User";
import connect from "@/utils/db"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


const handler =  NextAuth( {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connect();

        try {
          const user =  await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here

    // CredentialsProvider({
    //   id: "credentials",
    //   name: "credentials",

    //   async authorize(credentials){
    //     await connect();

    //     try {
    //       const user = await User.findOne({ email: credentials.email });
    //       if(user){
    //         const isPasswordCorrect = await bcrypt.compare(
    //           credentials.password,
    //           user.password
    //         );
    //         if(isPasswordCorrect){
    //           return user;
    //         }else{
    //           throw new Error("wrong credentials")
    //         }
    //       }else{
    //         throw new Error("user not found")
    //       }
    //     } catch (err) {
    //       throw new Error(err)
    //     }
    //   }
    // })
  ],
  pages:{
    error: "/dashboard/login",
  }
})

export {handler as GET, handler as POST}