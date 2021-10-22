let signUp = document.querySelector(".sign-up-wrapper")
let signIn = document.querySelector(".sign-in-wrapper")
let passwordVisible = [false,false]
let isOptions = false
let cardContent = [];

// Function for sign Up popup
const showSignUp = () =>{
    signIn.style.display = "none"
    signUp.style.display = "grid";
}

// Function for close sign up and login popup
const closeSignUp = () =>{
    signIn.style.display = "none"
    signUp.style.display = "none";
}

// Function for sign in popup
const showSignIn = () =>{
    signUp.style.display = "none"
    signIn.style.display = "grid"
}

// Function that toggle the password visibility
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

// Function that set the logged in interface
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
 

// Function that trigger the nav link click
const navLinkClick = (event) => {
    let enabled = document.querySelector('.enabled-nav-link')
    enabled.classList.remove("enabled-nav-link")
    event.target.classList.add("enabled-nav-link")
}

// Function that open the option list when click on the option button in the postcard
const showOptions = (event) =>{
    event.target.classList.add("option-btn-enabled")
}

// Function that manage the card description paragraph in single line and end with dot
const handleCardDescription = () =>{
    let card = document.querySelector('.card-body')
    let cardDescription = document.querySelectorAll('.card-description')
    let windowWidth = window.innerWidth

    let divisor ;
    if (windowWidth < 507){
        divisor = 5
    }else if(windowWidth < 768){
        divisor = 6.5;
    }else{
        divisor = 7
    }
    
    card = card.offsetWidth / divisor
    
    if(cardContent.length === 0){
        for(i =0 ;i<cardDescription.length ;i++){
            cardContent[i] = cardDescription[i].innerHTML
            cardDescription[i].innerHTML = cardContent[i].slice(0,card) + "..."
        }
    }else{
        for(i =0 ;i<cardDescription.length ;i++){
            cardDescription[i].innerHTML = cardContent[i].slice(0,card) + "..."
        }
        
    }
    

}


// Event listner for any click outside the card option button
document.addEventListener('click', function(event) {
    var ignoreClickOnMeElement = document.querySelector(".option-btn-enabled");
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
        document.querySelector('.option-btn-enabled').classList.remove("option-btn-enabled");
    }
});

// Event listner for the window resize, this will call the handleCardDescription function for set card description paragraph length
window.addEventListener("resize", handleCardDescription);