// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKtmKbEWvF5yuDrjYOh37o0y7G3zrf14M",
  authDomain: "tour-service-ae2c6.firebaseapp.com",
  projectId: "tour-service-ae2c6",
  storageBucket: "tour-service-ae2c6.appspot.com",
  messagingSenderId: "850091904582",
  appId: "1:850091904582:web:fc2bce5a54b230d79b8447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;