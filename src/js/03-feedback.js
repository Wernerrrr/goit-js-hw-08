import throttle from 'lodash.throttle';

// STORAGE_KEY = "feedback-form-state";

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const button = document.querySelector('button');


var data = {email: emailInput.value, message: messageInput.value};

function storeInput (event) {
    data.email = emailInput.value;
    data.message = messageInput.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

emailInput.addEventListener('input', throttle(storeInput, 500));
messageInput.addEventListener('input', throttle(storeInput, 500));


function fillInput () {
    const checkStorage = localStorage.getItem("feedback-form-state");
    if (checkStorage !== null) {
        emailInput.value = JSON.parse(checkStorage).email;
        messageInput.value = JSON.parse(checkStorage).message;
    }
};

window.addEventListener('DOMContentLoaded', fillInput)

function handleSubmit (event) {
    event.preventDefault();
    if (!emailInput.value || !messageInput.value) {
        return;
    }
    data.email = emailInput.value;
    data.message = messageInput.value;
    console.log(data);
    emailInput.value = '';
    messageInput.value = '';
    localStorage.clear();
};

button.addEventListener('click', handleSubmit);
