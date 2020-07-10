import firebase from "firebase";


export default () => {
    try {
        const firebaseConfig = {
            apiKey: "AIzaSyDucxk1-s6wtXp2-0ayxGCFR4-ZN3kExZ8",
            authDomain: "my-blog-4c0fe.firebaseapp.com",
            databaseURL: "https://my-blog-4c0fe.firebaseio.com",
            projectId: "my-blog-4c0fe",
            storageBucket: "my-blog-4c0fe.appspot.com",
            messagingSenderId: "234918235076",
            appId: "1:234918235076:web:62ce5797803744b2e2b291",
            measurementId: "G-KK9GCT0NTT"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.firestore().settings({ timestampsInSnapshots: true });
    } catch (error) {
        if (!/already exists/.test(error.message)) {
            console.log(error.message);
        }
    }
    return firebase;
}



