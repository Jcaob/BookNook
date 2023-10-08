var logInBtn = document.getElementById("LogIn")
var signUpBtn = document.getElementById("SignIn")

logInBtn.addEventListener("click", logIn);
signUpBtn.addEventListener("click", SignUp);

async function logIn(){
    console.log("logged in")
    location.replace("#loggedIn")

}


async function SignUp(){
    console.log("Signed Up")
    location.replace("#signedUp")

}