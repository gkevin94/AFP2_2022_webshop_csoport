fetchBasket();

function fetchBasket(){
    var url = "/basket";
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData) {
            var productId = jsonData;
            console.log(jsonData);
            showBasket(jsonData);
        });
}
