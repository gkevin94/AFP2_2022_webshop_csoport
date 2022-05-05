window.onload = function () {
    fetchUser();
}

let id = 0;
let name = "";

window.onkeydown = e => {
    if (e.keyCode == 13) { document.forms[0].submit(); }
}

function fetchUser() {
  fetch("/user")
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      id = jsonData.id;
      name = jsonData.name;
    });
}

function handleFormSubmit() {
    let div = document.querySelector('#response-box');
    let form = document.forms["form-register"];
    if (form.confirm.value != form.password.value) {
        div.setAttribute("class", "alert alert-danger");
        div.innerHTML = "A két jelszó nem egyezik!";
        return;
    }
    let request = {
                    "name": name,
                    "email": "email",
                    "userName": form.username.value,
                    "password": form.password.value,
                    "enabled": 1,
                    "role": "ROLE_USER",
                    "userStatus": "ACTIVE"
                }
    console.log(request);
    fetch("/users/" + id, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        if(json.status == "OK") {
            div.setAttribute("class", "alert alert-success");
            div.innerHTML = "Sikeres módosítás! Átirányítunk...";
            setTimeout (function() {
                window.location.href = "/login.html";
            }, 1000);
        } else {
            div.innerHTML = json.message;
            div.setAttribute("class", "alert alert-danger");
        }
    });
    return false;
}