import firebase from "../../lib/firebaseConnect";
export default (req, res) => {
    switch (req.method) {
        case "POST":
            const { title, postContent } = req.body
            if (title === undefined || !postContent === undefined) {
                res.status(400).json({ message: "content must include postContent and title" })
            } else {
                firebase().firestore().collection("posts").add({ title, postContent, date: new Date() })
                    .then(() => {
                        res.status(200).json({ message: "succsess" })
                    })
                    .catch(err => {
                        res.status(500).json(err)
                    })
            }
            break;
        case "GET":
            firebase().firestore().collection("posts").get()
                .then(snapshot => {
                    let posts = []
                    snapshot.docs.forEach(doc => { posts = posts.concat(doc.data()) })
                    res.status(200).json({
                        posts: posts
                    })
                })
                .catch(err => {
                    res.status(500).json(err)
                })
            break;
        default:
            break;
    }
}   