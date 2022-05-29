import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWFJzgxrcmj3YayafdPxN6a_Rlktv0aJ0",
  authDomain: "envision-f7bee.firebaseapp.com",
  projectId: "envision-f7bee",
  storageBucket: "envision-f7bee.appspot.com",
  messagingSenderId: "976297448165",
  appId: "1:976297448165:web:c4d740fc4a4f1ed74cfa0c",
  measurementId: "G-DL00MSPVYQ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
