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

let container = document.querySelector("#container");
container.innerHTML = "";
let table = document.createElement("table");
table.setAttribute('class', 'table table-striped');
container.appendChild(table);

function showTableHead(jsonData){
    console.log(jsonData);
    let thead = document.createElement("thead");
    table.appendChild(thead);

    let trHead = document.createElement("tr");
    thead.appendChild(trHead);

    let thDate = document.createElement("th");
    thDate.setAttribute('scope', 'col');
    thDate.innerHTML = "Dátum";
    trHead.appendChild(thDate);

    let thName = document.createElement("th");
    thName.setAttribute('scope', 'col');
    thName.innerHTML = "Termék";
    trHead.appendChild(thName);
            
    let thPiece = document.createElement("th");
    thName.setAttribute('scope', 'col');
    thPiece.innerHTML = "Darab";
    trHead.appendChild(thPiece);

    let thDelivery = document.createElement("th");
    thName.setAttribute('scope', 'col');
    thDelivery.innerHTML = "Szállítási cím";
    trHead.appendChild(thDelivery);
}

function showTableBody(jsonData, i, j){
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    let dateTd = document.createElement("td");
    dateTd.innerHTML = jsonData[i].purchaseDate;
    dateTd.setAttribute('id', 'date');
    tr.appendChild(dateTd);

    let nameTd = document.createElement("td");
    nameTd.innerHTML = jsonData[i].orderedProducts[j].orderingName;
    nameTd.setAttribute('id', 'name');
    tr.appendChild(nameTd);

    let pieceTd = document.createElement("td");
    pieceTd.innerHTML = jsonData[i].orderedProducts[j].pieces;
    tr.appendChild(pieceTd);

    let deliveryTd = document.createElement("td");
    deliveryTd.innerHTML = jsonData[i].delivery.deliveryAddress;
    tr.appendChild(deliveryTd);

    tbody.appendChild(tr);
}

function showTable(jsonData){
    showTableHead(jsonData);
    for (let i = 0; i < jsonData.length; i++) {
        for (let j = 0; j < jsonData[i].orderedProducts.length ; j++) {
            showTableBody(jsonData, i, j);
        }
        if (i < jsonData.length - 2) {
            showTableHead(jsonData);
        }   
    }
}