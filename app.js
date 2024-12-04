import { getAuth ,createUserWithEmailAndPassword } from "./firebase.js";
// import {app} from "./firebase.js"

const auth = getAuth();

let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let signupBtn = document.getElementById("signupBtn");


signupBtn.addEventListener("click",()=>{

    if(userEmail.value.trim() && userPassword.value.trim()){
createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    // console.log(`user created successfully ${user}`);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage);
    console.log(errorCode)
  });
    }
    else {
        console.error("Email or password cannot be empty.");
    }
    location.href = "login.html"
})
