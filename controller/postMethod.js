import savedPosts from "../posts.json";
import posts from "../pages/api/posts";
import fs from "fs"
import firebase from "firebase";
export const savePost = (content) => {
    const { title, postsContent } = content
    const db = firebase.firestore();
    db.collection("posts").doc("post").set({ title, postsContent });
}