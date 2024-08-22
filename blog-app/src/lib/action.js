"use server"
import { revalidatePath } from "next/cache"
import { Post, User } from "./modal"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) =>{
    const { title,desc,slug,userId } = Object.fromEntries(formData)
    console.log(title,desc,slug,userId)

    try {
        connectToDb();
        const newPost = new Post({title,desc,slug,userId})
        await newPost.save();
        revalidatePath("/blog")   //to show fresh data
        console.log("Saved to database")
    } catch (error) {
        console.log(error.message)
        return {error:"something went wrong"}
    }
}

export const deletePost = async (formData) =>{
    const { id } = Object.fromEntries(formData)
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog")   //to show fresh data
        console.log("Deleted from database")
    } catch (error) {
        console.log(error.message)
        return {error:"something went wrong"}
        
    }
}
//formData: form verilerini içerir.
//Object.fromEntries(formData): Form verilerini bir nesneye dönüştürür.
export const register = async (formData) => {
   // formData'dan username, email, img, password ve passwordRepeat alanlarını alır.
  const {username,email,img,password,passwordRepeat} = Object.fromEntries(formData);
  if(passwordRepeat != password) {
    return "Password does not match!";
  }
  try {
    connectToDb();
    const user = await User.findOne({username});
    if(user){
      return "User already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    })
    await newUser.save();
    console.log("new user saved successfully to db");
    return { success: true };
  
  } catch (error) {
    console.log(error)
    return {error: "something went wrong"}
  }
}

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    // if (err.message.includes("CredentialsSignin")) {
    //   return { error: "Invalid username or password" };
    // }
    // throw err;
  }
};