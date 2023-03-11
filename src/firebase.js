import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDPD7bWbCJ5x4k41bgbCDvxx16U7zlD2LA",
    authDomain: "unichat-f36f9.firebaseapp.com",
    projectId: "unichat-f36f9",
    storageBucket: "unichat-f36f9.appspot.com",
    messagingSenderId: "737764502122",
    appId: "1:737764502122:web:54dde28c9671fb17cf3813"
}).auth();