// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCzDn_miPwegxHdrASSa1V4UNGE3bnr5cw',
  authDomain: 'opus-1cd83.firebaseapp.com',
  projectId: 'opus-1cd83',
  storageBucket: 'opus-1cd83.appspot.com',
  messagingSenderId: '327273707890',
  appId: '1:327273707890:web:c463c4ec7ed4d471b985eb',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const db = firebase.firestore();
export { firebase, auth, firestore, db };
