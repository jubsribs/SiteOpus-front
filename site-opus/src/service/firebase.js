// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHZgxF2g8_bHVvepaLSs1kDblAsIZsCJ0',
  authDomain: 'site-opus.firebaseapp.com',
  projectId: 'site-opus',
  storageBucket: 'site-opus.appspot.com',
  messagingSenderId: '1086957845212',
  appId: '1:1086957845212:web:75fca759fcff313a39d219',
};

// Initialize Firebase
export const Firebase = () => {
  let firebase = null;

  if (!getApps().length) {
    firebase = initializeApp(firebaseConfig);
  }
  return firebase;
};
