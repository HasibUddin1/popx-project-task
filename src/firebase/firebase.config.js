// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpUBQjUHMoMKihp6ezuQPq4nl8BadRf3U",
    authDomain: "popx-project.firebaseapp.com",
    projectId: "popx-project",
    storageBucket: "popx-project.appspot.com",
    messagingSenderId: "643565937256",
    appId: "1:643565937256:web:32e2af659575a6d43911dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;