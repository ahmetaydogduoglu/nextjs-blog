import { savePost } from "../../controller/postMethod"

export default (req, res) => {
    switch (req.method) {
        case "POST":
            const { title, postContet } = req.body
            savePost({ title, postContet });
            if (title === undefined || !postContet === undefined) {
                res.status(400).json({ message: "content must include postContent and title" })
            }
            res.status(200).json(req.body)
            break;
        case "GET":
            res.status(200).json({
                posts: "ahnet"
            })
            break;
        default:
            break;
    }
}   