import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBSYH0gXmSD4qnpx7XporqkVS0PiGRt4jk",
    authDomain: "s3-frontend.firebaseapp.com",
    projectId: "s3-frontend",
    storageBucket: "s3-frontend.appspot.com",
    messagingSenderId: "400853458744",
    appId: "1:400853458744:web:666e2cc6bebe3f4708ebcd",
    measurementId: "G-92S1KWH199"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}