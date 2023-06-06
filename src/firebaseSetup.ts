// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPEU_xYLDuF4LbynLJRCPLr1y0jfTqjfc',
  authDomain: 'personal-website-de56c.firebaseapp.com',
  projectId: 'personal-website-de56c',
  storageBucket: 'personal-website-de56c.appspot.com',
  messagingSenderId: '260553395157',
  appId: '1:260553395157:web:4ba65000854cdcabda4b5c',
  measurementId: 'G-4V85KR2YM4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
