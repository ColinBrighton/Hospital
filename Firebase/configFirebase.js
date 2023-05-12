// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD054uAgQqSGMGfOyF4vB5Uq0LmDa9MqOQ",
  authDomain: "hospital-913ec.firebaseapp.com",
  projectId: "hospital-913ec",
  storageBucket: "hospital-913ec.appspot.com",
  messagingSenderId: "281487075572",
  appId: "1:281487075572:web:e24a6094205d3e761816a1",
  measurementId: "G-3ECZD3XEM0"
};

if (!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase }