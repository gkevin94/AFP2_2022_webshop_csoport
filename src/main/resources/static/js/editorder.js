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

function showTable(jsonData) {
    let table = document.querySelector('#order-table');
    table.innerHTML = '';
    for (let i = 0; i < jsonData.length; i++) {
        let tr = document.createElement("tr");
        tr['raw-data'] = jsonData[i];   
        
        let idTd = document.createElement("td");
        idTd.innerHTML = jsonData[i].orderingName;
        let idTdId = 'idTd' + i;
        idTd.setAttribute('id', idTdId);
        tr.appendChild(idTd);

        let orderingPriceTd = document.createElement("td");
        orderingPriceTd.innerHTML = jsonData[i].orderingPrice;
        let orderingPriceTdId = 'priceTd' + i;
        orderingPriceTd.setAttribute('id', orderingPriceTdId);
        tr.appendChild(orderingPriceTd);

        let pieceTd = document.createElement("td");
        pieceTd.innerHTML = jsonData[i].pieces;
        let pieceTdId = 'pieceTd' + i;
        pieceTd.setAttribute('id', pieceTdId);
        tr.appendChild(pieceTd);

        let editButtonTd = document.createElement("td");
        let editButton = document.createElement("button");
        let editButtonId = 'editbuttonOp' + i;
        editButton.setAttribute('id', editButtonId);
        editButton.setAttribute('class', 'btn');
        editButton.setAttribute('onclick', `editPiece(${i})`);
        editButtonTd.appendChild(editButton);

        let saveButton = document.createElement("button");
        let saveButtonId = 'savebuttonOp' + i;
        saveButton.setAttribute('id', saveButtonId);
        saveButton.setAttribute('class', 'btn');
        saveButton.setAttribute('onclick', `savePiece(${i})`);
        saveButton.style.display = 'none';
        editButtonTd.appendChild(saveButton);

        let deleteButtonTd = document.createElement("td");
        let deleteButton = document.createElement("button");
        let deleteButtonId = 'deletebuttonOp' + i;
        deleteButton.setAttribute('id', deleteButtonId);
        deleteButton.setAttribute('class', 'btn');
        deleteButton.setAttribute('onclick', `deleteItem(${i})`);
        deleteButton['raw-data'] = jsonData[i];
        deleteButtonTd.appendChild(deleteButton);

        editButton.innerHTML = `<i class="fas fa-edit"></i>Szerkesztés`;
        saveButton.innerHTML = `<i class="fa fa-save"></i>Mentés`;
        deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>Törlés`;

        tr.appendChild(editButtonTd);
        tr.appendChild(deleteButtonTd);
        table.appendChild(tr);
    }
}

function editPiece(num){
    let piece = document.getElementById(`pieceTd${num}`);
    let pieceData = piece.innerHTML;

    piece.innerHTML = `<input id="inputQuantityOp${num}" type="number" step="1" value= '${pieceData}' style="width:40px;">`

    let edit = document.getElementById(`editbuttonOp${num}`);
    edit.style.display = 'none';
    let save = document.getElementById(`savebuttonOp${num}`);
    save.style.display = 'inline';
}

function savePiece(num){
    let productId = document.getElementById(`editbuttonOp${num}`).parentElement.parentElement['raw-data'].productId;
    let piece = document.getElementById(`inputQuantityOp${num}`).value;

    let request = {
        "pieces": piece,
        "productId": productId
    }

    fetch("/orders/piece", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(function (response) {
            return response;
        })
        .then(function (jsonData) {
            if (jsonData.ok == true) {
                document.getElementById(`pieceTd${num}`).innerHTML = piece;
                document.getElementById(`editbuttonOp${num}`).style.display = 'inline';
                document.getElementById(`savebuttonOp${num}`).style.display = 'none';
            }
        });
        return false;
}

