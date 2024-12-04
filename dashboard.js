import {getAuth, sendEmailVerification,signOut  } from './firebase.js';
const auth = getAuth();


let verifyEmail = document.getElementById("verifyEmail");
let logout = document.getElementById("signout");
logout.addEventListener("click",()=>{
    
    signOut(auth).then(() => {
// console.log("user logout successfully");
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You have logged out",
            showConfirmButton: false,
            timer: 1500
          })
          .then(()=>{
            location.href = "index.html";

          })
      }).catch((error) => {
        console.log(error);
        Swal.fire({
            title: "Error!",
            text: "Error occured: " + error.message,
            icon: "error",
            confirmButtonText: "OK"
        });      });

    })

    verifyEmail.addEventListener("click",()=>{
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
  });

    })


