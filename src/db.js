import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyAiBuFDAuI1IkqYJJoG5YheMGqiTfL2gAM",
    authDomain: "hiredev-fd641.firebaseapp.com",
    databaseURL: "https://hiredev-fd641.firebaseio.com",
    projectId: "hiredev-fd641",
    storageBucket: "hiredev-fd641.appspot.com",
    messagingSenderId: "654657008102",
    appId: "1:654657008102:web:6bd628a4d1fd5fbc"
};
firebase.initializeApp(config);
export const db = firebase.firestore();
export const auth = firebase.auth();