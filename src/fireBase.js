import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtQlCJmS8grxEdBTQ07fywb42i0_ELzCo",
  authDomain: "hsa-5488.firebaseapp.com",
  projectId: "hsa-5488",
  storageBucket: "hsa-5488.appspot.com",
  messagingSenderId: "199168140600",
  appId: "1:199168140600:web:87cb43e4dec339f6e44dcd",
  measurementId: "G-8RKB603RY3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
