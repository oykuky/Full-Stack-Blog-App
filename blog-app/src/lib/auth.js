import NextAuth from "next-auth"
import GithubProvider from 'next-auth/providers/github';
import { connectToDb } from "./utils";
import { User } from "./modal";

export const { handlers : { GET,POST}, auth, signIn, signOut} = NextAuth({ 
    providers:[
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
     }),
     ],
     callbacks:{
      async signIn({user,account,profile}){  // kullanıcı,hesap ve profil bilgilerini getirir
        console.log(user,account,profile)
        if(account.provider === "github"){
          connectToDb();
          try {
            const user = await User.findOne({email :profile.email})
            // Eğer kullanıcı yoksa yeni bir kullanıcı oluştur
            if(!user){
              const newUser = new User({
                username:profile.login,
                email:profile.email,
                image:profile.avatar_url,
              });
              await newUser.save();
            }
          } catch (error) {
            console.log(error)
            return false;
          }
        }
        return true;
      } 
     }
    });
