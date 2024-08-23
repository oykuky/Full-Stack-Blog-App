import NextAuth from "next-auth"
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./modal";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    await connectToDb(); // Bağlantı başarılı mı?
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");
    return user;
  } catch (err) {
    console.log('Login Error:', err.message); // Hata mesajını loglayın
    throw new Error("Failed to login!");
  }
};

export const { handlers : { GET,POST},signIn,signOut,auth} = NextAuth({ 
    providers:[
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
     }),
     CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          if (user) {
            return user;  // Bu kısımda kullanıcıyı döndürmelisiniz.
          } else {
            return null;
          }
        } catch (error) {
          console.log("Authorize Error:", error);
          return null;
        }
      }
      
    })
     ],
     callbacks:{
      async signIn({user,account,profile}){  // kullanıcı,hesap ve profil bilgilerini getirir
        console.log(user,account,profile)
         // Eğer kullanıcı GitHub üzerinden giriş yapıyorsa
        if(account.provider === "github"){
          connectToDb();
          try {
            const user = await User.findOne({email :profile.email})
            // Eğer kullanıcı yoksa yeni bir kullanıcı oluştur
            if(!user){
              const newUser = new User({
                username:profile.login,  // GitHub'dan gelen kullanıcı adını alır
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
    //  kullanıcı giriş yapmaya çalıştığında çalışır ve GitHub üzerinden giriş yapan kullanıcıların bilgilerini alır. Eğer kullanıcı veritabanında yoksa, onu oluşturur
    });
