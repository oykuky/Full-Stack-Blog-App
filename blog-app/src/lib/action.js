import { Post } from "./modal"
import { connectToDb } from "./utils"

export const addPost = async (formData) =>{
    "use server"
    const { title,desc,slug,userId } = Object.fromEntries(formData)
    console.log(title,desc,slug,userId)

    try {
        connectToDb();
        const newPost = new Post({title,desc,slug,userId})
        await newPost.save();
        console.log("Saved to database")
    } catch (error) {
        console.log(error.message)
        return {error:"something went wrong"}
        
    }
}