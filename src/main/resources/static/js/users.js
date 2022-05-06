window.onload = function() {
    fetchUsers();
};

var messageDiv = document.getElementById("message-div");

function fetchUsers() {
    fetch("/users")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            showTable(jsonData);
        });
}
