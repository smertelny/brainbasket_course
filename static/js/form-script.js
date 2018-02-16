"use strict";

var btn = document.getElementById("form-submit");

btn.addEventListener('click', function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email && password) {
        alert("Not implemented yet");
    } else {
        alert("Insert valid data");
    }
});