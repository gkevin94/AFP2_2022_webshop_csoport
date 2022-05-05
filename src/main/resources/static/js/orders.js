window.onload = function () {
    fetchOrders();
}

function fetchOrders() {
    fetch("/orders")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        checkOrderStatus(jsonData);
    });
}