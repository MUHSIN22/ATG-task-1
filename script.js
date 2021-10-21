let signUp = document.querySelector(".sign-up-wrapper")
let signIn = document.querySelector(".sign-in-wrapper")
let passwordVisible = [false,false]
let isOptions = false

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
    event && event.preventDefault();
    signUp.style.display = "none";
    signIn.style.display = "none";
    
    let createAccount = document.getElementById('btn-create-account')
    let headerProfile = document.querySelector('.profile-on-header')
    let groupSection = document.querySelector('.recommended-groups-wrapper')
    groupSection.style.display = "flex"
    createAccount.style.display = "none";
    headerProfile.style.display = "block"
    
}

const navLinkClick = (event) => {
    let enabled = document.querySelector('.enabled-nav-link')
    enabled.classList.remove("enabled-nav-link")
    event.target.classList.add("enabled-nav-link")
}

const showOptions = (event) =>{
    if(event.target.nextElementSibling){
        event.target.nextElementSibling.style.display = isOptions?"none":"block";
        isOptions = !isOptions
    }else{
        event.target.children[1].style.display = isOptions?"none":"block";
        isOptions = !isOptions
    }
}

const optionSelected = (event) => {
    let options = document.querySelector('.option-list')
    options.style.display = "none"
}