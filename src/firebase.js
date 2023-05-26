import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOBBuL2KF3QwD5bEBOKbinmzwhl0NThzM",
  authDomain: "mail-box-28163.firebaseapp.com",
  databaseURL: "https://mail-box-28163-default-rtdb.firebaseio.com",
  projectId: "mail-box-28163",
  storageBucket: "mail-box-28163.appspot.com",
  messagingSenderId: "383017972495",
  appId: "1:383017972495:web:e9ccf944f699f93e24447a",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth()
export const provider = new GoogleAuthProvider();
export const db = getFirestore();

