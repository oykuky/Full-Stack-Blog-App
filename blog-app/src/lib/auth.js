import NextAuth from "next-auth"
import GithubProvider from 'next-auth/providers/github';

export const { handlers : { GET,POST}, auth, signIn, signOut} = NextAuth({ 
    providers:[
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
     }),
     ],
    });
