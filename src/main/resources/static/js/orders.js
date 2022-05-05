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

let selector = document.querySelector("#checkStatus");
selector.addEventListener('change', function (event) {
    if (selector.checked) {
        fetchOrders();
    } else {
        fetchOrders();
    }
});

function checkOrderStatus(jsonData) {
    let checkStatus = document.querySelector("#checkStatus").checked;
    if (checkStatus) {
        showTable(jsonData);
    } else {
        showTable(jsonData.filter(e => e.orderStatus == "ACTIVE"));
    }
}