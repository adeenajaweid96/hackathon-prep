import {getAuth, signInWithEmailAndPassword,onAuthStateChanged ,GoogleAuthProvider,signInWithPopup,provider  } from "./firebase.js";


let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword")
let login = document.getElementById("login");

const auth = getAuth();

login.addEventListener("click",()=>{
    if(userEmail.value.trim() && userPassword.value.trim()){
signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user logged in succesfully",user );

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

    }
    else{
        console.log("put your data");

    }
})



//sign in with google popup
let loginGoogle =document.getElementById("loginGoogle");
    loginGoogle.addEventListener("click",()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    
        console.log(user);
        Swal.fire({
            text: 'user has been successfully logged in with google',
            icon: 'success',
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error?.customData?.email;
        const credential = GoogleAuthProvider?.credentialFromError(error);
        console.log(errorCode)
        console.log(errorMessage)
        // ...
    });

    })
    location.href = "dashboard.html";


