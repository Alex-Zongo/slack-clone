// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBoaj5wXC1-a16xEho2muPKhSllpiZLTYQ",
  authDomain: "slack-clone-2ccae.firebaseapp.com",
  projectId: "slack-clone-2ccae",
  storageBucket: "slack-clone-2ccae.appspot.com",
  messagingSenderId: "426240722465",
  appId: "1:426240722465:web:b9a9f6c7a7f3e77ec54560",
  measurementId: "G-LN2P5ZZ8L7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
