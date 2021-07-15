import firebase from 'firebase';

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCyBo2DuYjJF7SreyJ8wuqfxuU8DOXjwzM",
  authDomain: "newsletter-a94a1.firebaseapp.com",
  projectId: "newsletter-a94a1",
  storageBucket: "newsletter-a94a1.appspot.com",
  messagingSenderId: "719190230171",
  appId: "1:719190230171:web:79445996bf6547f074f23e",
  measurementId: "G-KJBW8HEWK8"
};
  // Initialize Firebase
 if (!firebase.apps.length) {
    firebase.initializeApp({firebaseConfig});
  }

export default firebase.database();