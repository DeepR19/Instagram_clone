import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcBDxan3rzbZAdew7ZpEUzgim-i1SsgbU",
  authDomain: "instagram-clone-ec6df.firebaseapp.com",
  projectId: "instagram-clone-ec6df",
  storageBucket: "instagram-clone-ec6df.appspot.com",
  messagingSenderId: "723090338180",
  appId: "1:723090338180:web:9278933367353dd7c7edd1"
};

!firebase.apps.length ? 
firebase.initializeApp(firebaseConfig) :
firebase.app()

const db = firebase.firestore()


export {firebase, db};