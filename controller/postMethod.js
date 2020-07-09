import savedPosts from "../posts.json";
import posts from "../pages/api/posts";
import fs from "fs"
export const savePost = (content) => {
    const { title, postsContent } = content
    const tempPosts = [{ title, postsContent }, ...posts];
    fs.writeFile("../posts.json", JSON.stringify(tempPosts), (err) => {
        console.log(err);
    })
}