  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged  ,GoogleAuthProvider 
    ,signInWithPopup, sendEmailVerification ,signOut 
  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyC6TfLKO2El2rIqkUDBFKmyrcsnHU-FrCg",
    authDomain: "smit-hackathon-777f5.firebaseapp.com",
    projectId: "smit-hackathon-777f5",
    storageBucket: "smit-hackathon-777f5.firebasestorage.app",
    messagingSenderId: "747836690661",
    appId: "1:747836690661:web:96cc3b8b8d09cf57cb440c"
  };

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();


  export{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged ,GoogleAuthProvider 
    ,signInWithPopup,provider ,sendEmailVerification ,signOut 
   }
