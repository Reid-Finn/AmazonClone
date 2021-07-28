import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj-mG00gfZyFn8MZRF4KP9bjTV-jRV9vo",
    authDomain: "clone-e8c21.firebaseapp.com",
    projectId: "clone-e8c21",
    storageBucket: "clone-e8c21.appspot.com",
    messagingSenderId: "348431027510",
    appId: "1:348431027510:web:978a6f932d9fec20117797",
    measurementId: "G-2GJ1T3ND7R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };