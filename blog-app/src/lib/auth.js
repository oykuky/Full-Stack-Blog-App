// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/Github"
// export const { handlers : { GET,POST}, auth, signIn, signOut} = NextAuth({ 
//     providers:[
//        GitHub ({
//         clientId : process.env.GITHUB_ID,
//         clientSecret : process.env.GITHUB_SECRET,  
//      }),
//      ],
//     });

    
// // import NextAuth from "next-auth";
// // import GitHubProvider from "next-auth/providers/github";

// //  const authOptions = {
// //    providers: [
// //      GitHubProvider({
// //        clientId: process.env.GITHUB_ID,
// //        clientSecret: process.env.GITHUB_SECRET,
// //      }),
// //    ],
// //    secret: process.env.AUTH_SECRET,
// //    pages: {
// //      signIn: '/login',
// //    },
// //  };

// // export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authOptions);
import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

export const { handlers : { GET,POST}, auth, signIn, signOut} = NextAuth({ 
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});

