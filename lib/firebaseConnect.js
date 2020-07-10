import firebase from "firebase";


export default () => {
    try {
        const firebaseConfig = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTHDOMAIN,
            databaseURL: process.env.FIREBASE_DATABASEURL,
            projectId: process.env.FIREBASE_PROJECTID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
            measurementId: process.env.FIREBASE_MEASUREMENT_ID
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



