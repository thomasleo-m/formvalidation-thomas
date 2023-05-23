let myForm = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");

myForm.addEventListener('submit', e => {
    e.preventDefault();

    checkinput();
});


function checkinput() {

    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let pwd1Value = pwd1.value.trim();
    let pwd2Value = pwd2.value.trim();

    let usernameValid = true;
    let emailValid = true;
    let pwd1Valid = true;
    let pwd2Valid = true;

    if(usernameValue == '') {
        setErrorFor(username, 'Username cannot be left Blank');
        usernameValid = false;
    }
    else{
        setSuccessFor(username);
    }


    if(emailValue == '') {
        setErrorFor(email, 'Email cannot be left Blank');
        emailValid = false;
    }
    else if(!isMail(emailValue)){
        setErrorFor(email, 'not a valid email');
        emailValid = false;
    }
    else{
        setSuccessFor(email);
    }



    if(pwd1Value == '') {
        setErrorFor(pwd1, 'Password cannot be left Blank');
        pwd1Valid = false;
    }
    else{
        setSuccessFor(pwd1);
    }



    if(pwd2Value == '') {
        setErrorFor(pwd2, 'Re-enter password cannot be left Blank');
        pwd2Valid = false;
    }
    else if(pwd1Value !== pwd2Value) {
        setErrorFor(pwd2,'Password does not matched');
        pwd2Valid = false;
    }
    else{
        setSuccessFor(pwd2);
    }

    if (usernameValid && emailValid && pwd1Valid && pwd2Valid) {
        alert("Successfull");
    }

}



function setErrorFor(input, message) {

    let formControl = input.parentElement;

    let small = formControl.querySelector('small');

    formControl.className = 'form-control error';

    small.innerText = message;

}

function setSuccessFor(input) {

    let formControl = input.parentElement;

    formControl.className = 'form-control success';

}

function isMail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}
