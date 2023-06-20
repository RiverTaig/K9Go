import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjJrhWRQaslMDoSIuBvth8RprLbg7s3FE",
    authDomain: "walkipedia-81dd3.firebaseapp.com",
    projectId: "walkipedia-81dd3",
    storageBucket: "walkipedia-81dd3.appspot.com",
    messagingSenderId: "514716350994",
    appId: "1:514716350994:web:78160c2127d8fcbc1736cb",
    measurementId: "G-5XD3MH2YZP",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);