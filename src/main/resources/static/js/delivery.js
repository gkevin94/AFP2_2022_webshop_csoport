fetchUserDeliveries()

function fetchUserDeliveries(){
    var url = "/delivery";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
           showdeliveries(jsonData);
        });
}