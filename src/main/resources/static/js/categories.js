fetchCategories();

function fetchCategories() {
    fetch("/categories")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            showTable(jsonData);
        });
}

function showTable(jsonData) {
var table = document.querySelector("#admincategories-table");
table.innerHTML = "";
for (var i = 0; i < jsonData.length; i++) {
    var tr = document.createElement("tr");
    tr["raw-data"] = jsonData[i];

    var ordinalTd = document.createElement("td");
    ordinalTd.innerHTML = jsonData[i].ordinal;
    var ordinalTdId = 'ordinalTd' + i;
    ordinalTd.setAttribute('id', ordinalTdId);
    tr.appendChild(ordinalTd);

    var nameTd = document.createElement("td");
    nameTd.innerHTML = jsonData[i].name;
    var nameTdId = 'nameTd' + i;
    nameTd.setAttribute('id', nameTdId);
    tr.appendChild(nameTd);

    var editButtonTd = document.createElement("td");
    var editButton = document.createElement("button");
    var editButtonId = 'editbutton' + i;
    editButton.setAttribute('id', editButtonId);
    editButton.setAttribute('class', 'btn');
    editButton.setAttribute('onclick', `editTds(${i})`);
    editButtonTd.appendChild(editButton);

    var saveButton = document.createElement("button");
    var saveButtonId = 'savebutton' + i;
    saveButton.setAttribute('id', saveButtonId);
    saveButton.setAttribute('class', 'btn');
    saveButton.setAttribute('onclick', `saveTds(${i})`);
    saveButton.style.display = 'none';
    editButtonTd.appendChild(saveButton);

    var deleteButtonTd = document.createElement("td");
    var deleteButton = document.createElement("button");
    var deleteButtonId = 'deletebutton' + i;
    deleteButton.setAttribute('id', deleteButtonId);
    deleteButton.setAttribute('class', 'btn');
    deleteButton.setAttribute('onclick', `deleteCategory(${i})`);
    deleteButton['raw-data'] = jsonData[i];
    deleteButtonTd.appendChild(deleteButton);

    editButton.innerHTML = `<i class="fas fa-edit"></i>Szerkesztés`;
    saveButton.innerHTML = `<i class="fa fa-save"></i>Mentés`;
    deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>Törlés`;

    tr.appendChild(editButtonTd);
    tr.appendChild(deleteButtonTd);

    table.appendChild(tr);
}