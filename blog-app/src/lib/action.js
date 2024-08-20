"use server"
import { revalidatePath } from "next/cache"
import { Post } from "./modal"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth";
// import bcrypt from "bcryptjs";

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

export const handleGithubLogin = async () => {
    try {
      await signIn("github");
    } catch (error) {
      console.error("GitHub authorize error", error);
    }
  };
  
  
  export const handleLogout = async () => {
    "use server"
    await signOut();
  };