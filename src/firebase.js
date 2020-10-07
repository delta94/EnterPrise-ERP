import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJcybN_q2ZMecpgQAcJfgf75BCO0DAEpA",
  authDomain: "enterprise-64e33.firebaseapp.com",
  databaseURL: "https://enterprise-64e33.firebaseio.com",
  projectId: "enterprise-64e33",
  storageBucket: "enterprise-64e33.appspot.com",
  messagingSenderId: "1051731039657",
  appId: "1:1051731039657:web:fb1444304a40faa6fce0b8",
  measurementId: "G-F8XFBE6V5N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
