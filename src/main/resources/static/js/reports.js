function fetchOrderReport() {
    fetch("/reports/orders")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            showIncomeTable(jsonData);
        });
}

function fetchProductReport() {
    fetch("/reports/products")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            showProductTable(jsonData);
        });
}
