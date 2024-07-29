// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB84r93ImgBTsj4XvBVBHd66mbp8mROpIY",
  authDomain: "shipyard-7ae59.firebaseapp.com",
  projectId: "shipyard-7ae59",
  storageBucket: "shipyard-7ae59.appspot.com",
  messagingSenderId: "425324257732",
  appId: "1:425324257732:web:0df3b80b2f162f903cc491",
  measurementId: "G-YEF0S5KTXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);

export { app, auth };


