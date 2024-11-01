// public/js/firebase-init.js

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8z4RKd4n-T75jqDvgnKC9CdCD-QQDcDE",
  authDomain: "project-eventify-2bcd1.firebaseapp.com",
  projectId: "project-eventify-2bcd1",
  storageBucket: "project-eventify-2bcd1.firebasestorage.app",
  messagingSenderId: "104240773119",
  appId: "1:104240773119:web:addf5ccac77b697661d9ca",
  measurementId: "G-F2T3SWKE5S",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
