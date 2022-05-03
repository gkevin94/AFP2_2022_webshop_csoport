let id = (new URL(document.location)).searchParams.get('id');

window.onload = function () {
    fetchOrders();
}

function fetchOrders() {
    fetch("/orders/" + id).then(function (response) {
        return response.json();
    }).then(function (jsonData) {
        console.log(jsonData);
        showTable(jsonData);
    });
}