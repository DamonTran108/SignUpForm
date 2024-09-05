const form =  document.querySelector("form");
const email  = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const fName = document.getElementById("first-name");
const fNameError = document.querySelector("#first-name + span.error");

const lName = document.getElementById("last-name");
const lNameError = document.querySelector("#last-name + span.error");

const pNumber = document.getElementById("number");
const pNumberError = document.querySelector("#number + span.error");

const pwd = document.getElementById("password");
const pwdError = document.querySelector("#password + span.error");

const cnfPwd = document.getElementById("confirm-pwd");
const cnfPwdError = document.querySelector("#confirm-pwd + span.error");




email.addEventListener("input" , (event) => {

    if(email.validity.valid){

        emailError.textContent = "";
        emailError.className = "error";
    }else {

        showError();
    }

});

fName.addEventListener("input" , (event) => {

    if(fName.validity.valid){

        fNameError.textContent = "";
        fNameError.className = "error";
    }

   
   
});


fName.addEventListener("focus" , (event) => {

    if(fName.validity.valid){

        fNameError.textContent = "";
        fNameError.className = "error";
    }

});







lName.addEventListener("input" , (event) => {

    if(lName.validity.valid){

        lNameError.textContent = "";
        lNameError.className = "error";
    }

});

pwd.addEventListener("input" , (event) => {

    if(pwd.validity.valid){

        pwdError.textContent = "";
        pwdError.className = "error";
    }

});

pNumber.addEventListener("input" , (event) => {

    if(pNumber.validity.valid){

        pNumberError.textContent = "";
        pNumberError.className = "error";
    }

});




form.addEventListener("submit", (event) =>{

   
    if(!email.validity.valid){

        showError();

        event.preventDefault();
        
    }

    if (fName.validity.valueMissing){
        fNameError.textContent = "Please Enter a name";
        event.preventDefault();

    }

    if (lName.validity.valueMissing){
        lNameError.textContent = "Please Enter a Last name";
        event.preventDefault();

    }

    if (pNumber.validity.valueMissing){
        pNumberError.textContent = "Please Enter a Phone Number";
    
    
        event.preventDefault();

    }else if (pNumber.validity.tooShort) {
        pNumberError.textContent = "Please Enter a valid Phone Number";

        event.preventDefault();
    } else if (pNumber.validity.tooShort) {
        pNumberError.textContent = "Please Enter a valid Phone Number";

        event.preventDefault();
    }


    if (pwd.validity.valueMissing){
        pwdError.textContent = "Please Enter a Password";
    
    
        event.preventDefault();
    }else if (pwd.validity.tooShort){
        pwdError.textContent = `Please ensure your password is  at least ${pwd.minLength}  Characters Long`;

    }

    if (pwd.validity.valueMissing){
        pwdError.textContent = "Please Enter a Password";
    
    
        event.preventDefault();
    }else if (pwd.validity.tooShort){
        pwdError.textContent = `Please ensure your password is  at least ${pwd.minLength}  Characters Long`;
        event.preventDefault();
    }

    if(cnfPwd.validity.valueMissing){
        cnfPwdError.textContent = "Please Ensure you have confirmed your password.";
        event.preventDefault();
    }else if(cnfPwd.value !== pwd.value){
        cnfPwdError.textContent = "Please Ensure your passwords match.";
        event.preventDefault();
    }
   
});



function showError(){

    if (email.validity.valueMissing){

        emailError.textContent = "You need to type in your email."
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Enter a value needs to be an email address."
    } else if(email.validity.tooShort) {

        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }


    emailError.className = "error active";
}