import firebase from "../../lib/firebaseConnect";
export default (req, res) => {
    switch (req.method) {
        case "POST":
            const { title, postContet } = req.body
            if (title === undefined || !postContet === undefined) {
                res.status(400).json({ message: "content must include postContent and title" })
            } else {
                firebase().firestore().collection("posts").add({ title: "merhaba" })
                    .then(() => {
                        req.status(200).json({ message: "succsess" })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json(err)
                    })
            }
            break;
        case "GET":
            firebase().firestore().collection("posts").get()
                .then(snapshot => {
                    req.status(200).json(snapshot)
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err)
                })
            break;
        default:
            break;
    }
}   