'use strict';

import "./login.scss";

let users = [
    {name: 'Maria', pass: '1234'},
    {name: 'John', pass: '5678'}
];

let validateForm = () => {
    let form = document.forms.login;
    let credentials = {
        user: form.username.value,
        pass: form.password.value
    };
    let authorizationStatus = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === credentials.user && users[i].pass === credentials.pass) {
            authorizationStatus = true;
            break;
        }
    }
    displayAuthorizationStatus(authorizationStatus);
};

let submitButton = document.querySelector('#button-submit');
submitButton.addEventListener('click', validateForm);

let displayAuthorizationStatus = (authorizationStatus) => {
    let authorizedUser = document.querySelector('.authorized-user');
    let unauthorizedUser = document.querySelector('.unauthorized-user');
    authorizedUser.style.display = authorizationStatus ? 'inline' : 'none';
    unauthorizedUser.style.display = authorizationStatus ? 'none' : 'inline';
};