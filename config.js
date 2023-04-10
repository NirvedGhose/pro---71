import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBZ90Tp3siB3TKIxUO_FdlGHBtQSJt62p8",
    authDomain: "e-bike-554c1.firebaseapp.com",
    projectId: "e-bike-554c1",
    storageBucket: "e-bike-554c1.appspot.com",
    messagingSenderId: "571878016995",
    appId: "1:571878016995:web:ece18d7a7f6abaf7af42d6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
