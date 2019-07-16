// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDow2PeuGzGpWD9fM3kkyWY5HZioK6Giv4",
  authDomain: "grmnotebook.firebaseapp.com",
  databaseURL: "https://grmnotebook.firebaseio.com",
  projectId: "grmnotebook",
  storageBucket: "",
  messagingSenderId: "295550652414",
  appId: "1:295550652414:web:b734b478085ed69c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const root = db.ref();
