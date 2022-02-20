const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const clock = document.querySelector("#clock");
    const clockInfo = clock.innerText;
    const clockHours = parseInt(clockInfo.split(':',1));
    if (clockHours < 12 && clockHours >= 6) {
        greeting.innerText = `Good Morning ${username}`;
    } else if (clockHours >= 12 && clockHours < 18) {
        greeting.innerText = `Good Afternoon ${username}`;
    } else {
        greeting.innerText = `Good Evening ${username}`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}