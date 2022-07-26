const form = document.getElementById('form');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');

let isvalid = false;
let passwordmatch = false;

function validate(){
    isvalid = form.checkValidity();
    if(!isvalid){
    message.textContent = "Please fill all the form inputs!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
    }
    if(password1El.value === password2El.value){
        passwordmatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }else{
        passwordmatch = false;
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        message.textContent = "Make sure passwords match!";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    if(isvalid && passwordmatch){
        message.textContent = "Successfully Registered";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

function storedata(){
    const storeobj = {
        name : form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(storeobj);
}


function processFormData(e){
    e.preventDefault();
    validate();
    if(isvalid && passwordmatch){
        storedata();
    }
    
}

form.addEventListener('submit', processFormData);