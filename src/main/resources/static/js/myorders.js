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

var container = document.querySelector("#container");
container.innerHTML = "";
var table = document.createElement("table");
table.setAttribute('class', 'table table-striped');
container.appendChild(table);

function showTableHead(jsonData){
    console.log(jsonData);
    var thead = document.createElement("thead");
    table.appendChild(thead);

    var trHead = document.createElement("tr");
    thead.appendChild(trHead);

    var thDate = document.createElement("th");
    thDate.setAttribute('scope', 'col');
    thDate.innerHTML = "Dátum";
    trHead.appendChild(thDate);

    var thName = document.createElement("th");
    thName.setAttribute('scope', 'col');
    thName.innerHTML = "Termék";
    trHead.appendChild(thName);
            
    var thPiece = document.createElement("th");
    thName.setAttribute('scope', 'col');
    thPiece.innerHTML = "Darab";
    trHead.appendChild(thPiece);

    var thDelivery = document.createElement("th");
    thName.setAttribute('scope', 'col');
    thDelivery.innerHTML = "Szállítási cím";
    trHead.appendChild(thDelivery);
}