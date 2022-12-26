import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiAiSPW20l3FwEvrUp1V2zH03IRWthkHg",
  authDomain: "projectwithmentor-bfee2.firebaseapp.com",
  projectId: "projectwithmentor-bfee2",
  storageBucket: "projectwithmentor-bfee2.appspot.com",
  messagingSenderId: "1069245160835",
  appId: "1:1069245160835:web:4ddf3ecc79fb7c399faab6",
  measurementId: "G-YSSFBZTS4X",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
