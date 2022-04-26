window.onload = function () {
    fetchProducts();
    fetchCategories();
}

var global;

//TODO: service-ben szűrés a category nevekre

function fetchProducts() {
    fetch("/products")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            showTable(jsonData);
    });
}

function fetchCategories(){
    fetch("/categories")
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        global = jsonData;
    });
    return false;
}


    function showTable(jsonData) {
    var table = document.querySelector("#adminproducts-table");
    table.innerHTML = "";
    for (var i = 0; i < jsonData.length; i++) {
        var tr = document.createElement("tr");
        tr["raw-data"] = jsonData[i];
      
        var idTd = document.createElement("td");
        idTd.innerHTML = jsonData[i].id;
        var idTdId = 'idTd' + i;
        idTd.setAttribute('id', idTdId);
        tr.appendChild(idTd);

        var codeTd = document.createElement("td");
        codeTd.innerHTML = jsonData[i].code;
        var codeTdId = 'codeTd' + i;
        codeTd.setAttribute('id', codeTdId);
        tr.appendChild(codeTd);
        
        var nameTd = document.createElement("td");
        nameTd.innerHTML = jsonData[i].name;
        var nameTdId = 'nameTd' + i;
        nameTd.setAttribute('id', nameTdId);
        tr.appendChild(nameTd);

        var addressTd = document.createElement("td");
        addressTd.innerHTML = jsonData[i].address;
        var addressTdId = 'addressTd' + i;
        addressTd.setAttribute('id', addressTdId);
        tr.appendChild(addressTd);
       
        var manufactureTd = document.createElement("td");
        manufactureTd.innerHTML = jsonData[i].manufacture;
        var manTdId = 'manTd' + i;
        manufactureTd.setAttribute('id', manTdId);
        tr.appendChild(manufactureTd);

        var priceTd = document.createElement("td");
        priceTd.innerHTML = jsonData[i].price;
        var priceTdId = 'priceTd' + i;
        priceTd.setAttribute('id', priceTdId);
        tr.appendChild(priceTd);

        var statusTd = document.createElement("td");
        statusTd.innerHTML = "aktív";
        var statusTdId = 'statusTd' + i;
        statusTd.setAttribute('id', statusTdId);
        tr.appendChild(statusTd);

        var categoryTd = document.createElement("td");
        categoryTd.innerHTML = jsonData[i].category.name;
        var categoryTdId = 'categoryTd' + i;
        categoryTd.setAttribute('id', categoryTdId);
        tr.appendChild(categoryTd);

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

        var editImageButtonTd = document.createElement("td");
        var editImageButton = document.createElement("button");
        var editImageButtonId = 'editimagebutton' + i;
        editImageButton.setAttribute('id', editImageButtonId);
        editImageButton.setAttribute('class', 'btn');
        editImageButton.setAttribute('onclick', `editImageTds(${jsonData[i].id})`);
        editImageButtonTd.appendChild(editImageButton);

        var deleteButtonTd = document.createElement("td");
        var deleteButton = document.createElement("button");
        var deleteButtonId = 'deletebutton' + i;
        deleteButton.setAttribute('id', deleteButtonId);
        deleteButton.setAttribute('class', 'btn');
        deleteButton.setAttribute('onclick', `deleteProduct(${i})`);
        deleteButton['raw-data'] = jsonData[i];
        deleteButtonTd.appendChild(deleteButton);
        

        editButton.innerHTML = `<i class="fas fa-edit"></i> Szerkesztés`;
        saveButton.innerHTML = `<i class="fa fa-save"></i> Mentés`;
        editImageButton.innerHTML = `<i class="far fa-images"></i> Kép hozzáadása`
        deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i> Törlés`;

        tr.appendChild(editButtonTd);
        tr.appendChild(editImageButtonTd);
        tr.appendChild(deleteButtonTd);

        table.appendChild(tr);
        
    }
    var createButton = document.getElementById('createButton');
    createButton.setAttribute('onclick', `showNewRow(${jsonData.length})`);

}

window.onload = function () {
    fetchProducts();
    fetchCategories();
}

var global;

//TODO: service-ben szűrés a category nevekre

function fetchProducts() {
    fetch("/products")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            showTable(jsonData);
    });
}

function fetchCategories(){
    fetch("/categories")
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        global = jsonData;
    });
    return false;
}


    function showTable(jsonData) {
    var table = document.querySelector("#adminproducts-table");
    table.innerHTML = "";
    for (var i = 0; i < jsonData.length; i++) {
        var tr = document.createElement("tr");
        tr["raw-data"] = jsonData[i];
      
        var idTd = document.createElement("td");
        idTd.innerHTML = jsonData[i].id;
        var idTdId = 'idTd' + i;
        idTd.setAttribute('id', idTdId);
        tr.appendChild(idTd);

        var codeTd = document.createElement("td");
        codeTd.innerHTML = jsonData[i].code;
        var codeTdId = 'codeTd' + i;
        codeTd.setAttribute('id', codeTdId);
        tr.appendChild(codeTd);
        
        var nameTd = document.createElement("td");
        nameTd.innerHTML = jsonData[i].name;
        var nameTdId = 'nameTd' + i;
        nameTd.setAttribute('id', nameTdId);
        tr.appendChild(nameTd);

        var addressTd = document.createElement("td");
        addressTd.innerHTML = jsonData[i].address;
        var addressTdId = 'addressTd' + i;
        addressTd.setAttribute('id', addressTdId);
        tr.appendChild(addressTd);
       
        var manufactureTd = document.createElement("td");
        manufactureTd.innerHTML = jsonData[i].manufacture;
        var manTdId = 'manTd' + i;
        manufactureTd.setAttribute('id', manTdId);
        tr.appendChild(manufactureTd);

        var priceTd = document.createElement("td");
        priceTd.innerHTML = jsonData[i].price;
        var priceTdId = 'priceTd' + i;
        priceTd.setAttribute('id', priceTdId);
        tr.appendChild(priceTd);

        var statusTd = document.createElement("td");
        statusTd.innerHTML = "aktív";
        var statusTdId = 'statusTd' + i;
        statusTd.setAttribute('id', statusTdId);
        tr.appendChild(statusTd);

        var categoryTd = document.createElement("td");
        categoryTd.innerHTML = jsonData[i].category.name;
        var categoryTdId = 'categoryTd' + i;
        categoryTd.setAttribute('id', categoryTdId);
        tr.appendChild(categoryTd);

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

        var editImageButtonTd = document.createElement("td");
        var editImageButton = document.createElement("button");
        var editImageButtonId = 'editimagebutton' + i;
        editImageButton.setAttribute('id', editImageButtonId);
        editImageButton.setAttribute('class', 'btn');
        editImageButton.setAttribute('onclick', `editImageTds(${jsonData[i].id})`);
        editImageButtonTd.appendChild(editImageButton);

        var deleteButtonTd = document.createElement("td");
        var deleteButton = document.createElement("button");
        var deleteButtonId = 'deletebutton' + i;
        deleteButton.setAttribute('id', deleteButtonId);
        deleteButton.setAttribute('class', 'btn');
        deleteButton.setAttribute('onclick', `deleteProduct(${i})`);
        deleteButton['raw-data'] = jsonData[i];
        deleteButtonTd.appendChild(deleteButton);
        

        editButton.innerHTML = `<i class="fas fa-edit"></i> Szerkesztés`;
        saveButton.innerHTML = `<i class="fa fa-save"></i> Mentés`;
        editImageButton.innerHTML = `<i class="far fa-images"></i> Kép hozzáadása`
        deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i> Törlés`;

        tr.appendChild(editButtonTd);
        tr.appendChild(editImageButtonTd);
        tr.appendChild(deleteButtonTd);

        table.appendChild(tr);
        
    }
    var createButton = document.getElementById('createButton');
    createButton.setAttribute('onclick', `showNewRow(${jsonData.length})`);

}
function editTds(num){
    var code = document.getElementById(`codeTd${num}`);
    var name = document.getElementById(`nameTd${num}`);
    var address = document.getElementById(`addressTd${num}`);
    var manu = document.getElementById(`manTd${num}`);
    var price = document.getElementById(`priceTd${num}`);
    var category = document.getElementById(`categoryTd${num}`);
    selectedCategory = category.innerHTML;

    var codeData = code.innerHTML;
    var nameData = name.innerHTML;
    var addressData = address.innerHTML;
    var manuData = manu.innerHTML;
    var priceData = price.innerHTML;
    var categoryData = category.innerHTML;

    code.innerHTML = `<input id="codeInput${num}" type='text' minLength='1' maxLength='255' class='input-box'  value = '${codeData}' required>`
    name.innerHTML = `<input id="nameInput${num}" type='text' minLength='1' maxLength='255' class='input-box'  value='${nameData}' required>`
    address.innerHTML = `<input id="addressInput${num}" type='text' minLength='1' maxLength='255' class='input-box'  value='${addressData}' required>`
    manu.innerHTML = `<input id="manInput${num}" type='text' minLength='1' maxLength='255' class='input-box'  value='${manuData}' required>`
    price.innerHTML = `<input id="priceInput${num}" type='number' class='input-box' min='0' max='2000000' step= '1' value='${priceData}' required>`
    category.innerHTML = `<select id="selectInput${num}" class='form-control' value='${categoryData}'  required>`

    var edit = document.getElementById(`editbutton${num}`);
    edit.style.display = 'none';
    var save = document.getElementById(`savebutton${num}`);
    save.style.display = 'inline';
    showCategories(num, selectedCategory);
}


 function editImageTds(productId){
   location.replace("/upload.html?productId=" + productId );
    }


function showCategories(num, category){
    var jsonData = global;
    var myselect2 = document.querySelector('#selectInput' + num);
    myselect2.innerHTML = "";
    for (var i = 0; i < jsonData.length; i++) {
        myselect2.innerHTML +=
        `<option value="${jsonData[i].name}">${jsonData[i].name}</option>`
    }
}

