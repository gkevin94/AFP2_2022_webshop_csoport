fetchMyOrders();

function fetchMyOrders(){
    let url = "/myorders";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        showTable(jsonData)
    });
}