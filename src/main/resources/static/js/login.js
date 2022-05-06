window.onload = function () {
    checkLoginError();
}

function checkLoginError() {
let url = window.location.href;
let inputErrorMessage = "Hibás név vagy jelszó!";
    if (url.split("?")[1] == "error") {
        document.querySelector("#main-message").innerHTML = inputErrorMessage;
    }
}

window.onkeydown = e => {
    if (e.keyCode == 13) { 
        document.forms[0].submit();
    }
}