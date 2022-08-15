// JS Check
// console.log('it works');

// Declaration
const USERS = [ 
    { name: "supercode", secret: "no_one_will_know"},
    { name: "music_fan_1990", secret: "WeAreTheChampi0ns"},
    { name: "admin", secret: "1234"},
];

// let secretContent = document.querySelector('#secretContent');
let checkData = document.querySelector('#checkData');
let logOut = document.querySelector('#logOut');
let loginModal = document.querySelector('#loginModal');
let newUserInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let newUserOutput = document.querySelector('#newUser');
let starUser = document.querySelector('#starUser');
let starPassword = document.querySelector('#starPassword');
let resultOfCheck = document.querySelector('#resultOfCheck');
let loginCookie = document.cookie;

// function for closing the modal
let closing = () => {
    loginModal.style.display = "none";
}

// set cookies, password and user -> not safe!!
let cookies = () => {
    username = "username=" + newUserInput.value + ";path=/" + ";max-age= 60*30 ";
    password = "password=" + passwordInput.value + ";path=/" + ";max-age= 60*30";
    document.cookie = username; 
    document.cookie = password;
};

// function to remove cookies
let logout = () => {
    document.cookie = "username=; max-age=0";
    document.cookie = "password=; max-age=0";
    loginModal.style.display = "block";
}

// function to check if the user is logged in
let checkCookie = (loginCookie) => {
    if (loginCookie != "" ) {
        loginModal.style.display = "none";
        loginCookie = loginCookie.split(";")[0].slice(9);
        newUserOutput.innerText = loginCookie;
    }
};

checkCookie(loginCookie);

// function for checking the password and user
let correctInputs = () => {
    for (let i = 0; i < USERS.length; i++) {
      if (newUserInput.value == USERS[i].name) {
        if (passwordInput.value == USERS[i].secret) {
          newUserOutput.innerText = newUserInput.value;
          cookies();
          closing();
          return
        } else {
            resultOfCheck.innerText = '*password incorrect';
            resultOfCheck.style.display = "block";
            starPassword.style.display = "block";
            return
        }
      }
    };

    resultOfCheck.innerText = 'user does not exist.';
    resultOfCheck.style.display = "block";
    starUser.style.display = "block";
};

// total function for checking inputs and closing modal
checkData.addEventListener('click', (event) => {
    event.preventDefault();
    correctInputs();
});

logOut.addEventListener('click', (event) => {
    event.preventDefault();
    logout();
    document.location.reload();
});