const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const savedUsername = localStorage.getItem("username");


function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    greeting.innerText = "Hello " + username;
    greeting.classList.remove("hidden");

    localStorage.setItem("username", username);   
}

loginForm.addEventListener("submit", onLoginSubmit);

if(savedUsername === null) {
    loginForm.classList.remove("hidden");
} else {
    greeting.innerText = "Hello " + savedUsername;
    greeting.classList.remove("hidden");
}