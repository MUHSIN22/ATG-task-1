let signUp = document.querySelector(".sign-up-wrapper")
let signIn = document.querySelector(".sign-in-wrapper")
let passwordVisible = [false,false]

const showSignUp = () =>{
    signIn.style.display = "none"
    signUp.style.display = "grid";
}
const closeSignUp = () =>{
    signIn.style.display = "none"
    signUp.style.display = "none";
}
const showSignIn = () =>{
    signUp.style.display = "none"
    signIn.style.display = "grid"
}
const togglePasswordVisibility = (index) => {
    let passwordField = document.getElementsByClassName('password-field');
    let visibiltyIcon = document.getElementsByClassName('visibility-icon')
    passwordVisible[index] = !passwordVisible[index];
    if(passwordVisible[index]){
        visibiltyIcon[index].src = "/public/non-visible-icon.png";
        passwordField[index].type = 'text';
    }else{
        visibiltyIcon[index].src = "/public/visibility.svg";
        passwordField[index].type = 'password';
    }
}

const setLogin = (event) => {
    console.log(event);
    event.preventDefault();
    signUp.style.display = "none";
    signIn.style.display = "none";
    
    let createAccount = document.getElementById('btn-create-account')
    let headerProfile = document.querySelector('.profile-on-header')
    createAccount.style.display = "none";
    headerProfile.style.display = "block"
    
}