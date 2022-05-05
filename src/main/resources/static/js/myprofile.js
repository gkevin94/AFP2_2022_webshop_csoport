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