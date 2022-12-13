// Import the functions you need from the SDKs you need
import firebase from 'firebase'
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcBDxan3rzbZAdew7ZpEUzgim-i1SsgbU",
  authDomain: "instagram-clone-ec6df.firebaseapp.com",
  projectId: "instagram-clone-ec6df",
  storageBucket: "instagram-clone-ec6df.appspot.com",
  messagingSenderId: "723090338180",
  appId: "1:723090338180:web:9278933367353dd7c7edd1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); 

!firebase.apps.length ? 
firebase.initializeApp(firebaseConfig) :
firebase.app()

const db = firebase.fireStore()


export {firebase, db};