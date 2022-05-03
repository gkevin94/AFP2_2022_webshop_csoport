let sizeDropdown = document.querySelector("#size-select");
let categoryDropdown = document.querySelector("#category-select");
let url = new URL(document.location);

sizeDropdown.onchange = function(){
    let size = sizeDropdown[sizeDropdown.selectedIndex].value;
    if (url.searchParams.get("category"))
        window.location.href = `/index.html?start=0&size=${size}&category=${url.searchParams.get("category")}`;
    else
        window.location.href = `/index.html?start=0&size=${size}`;
};

categoryDropdown.onchange = function(){
    if (categoryDropdown[categoryDropdown.selectedIndex].value != 'all') {
        let category = categoryDropdown[categoryDropdown.selectedIndex].value;
        window.location.href = `/index.html?category=${category}`;
    } else
        window.location.href = `/`;
};

if(!url.searchParams.get("start") && !url.searchParams.get("category")) {
    fetchProducts();
} else if (!url.searchParams.get("category")) {
    fetchProductsWithStartAndSize();
} else {
    fetchProductsWithStartAndSizeAndCategory();
}
    fetchAdvice();

sizeDropdown.value = url.searchParams.get("size") || 999;

function fetchProducts() {
    fetch("/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        listProducts(jsonData);
    });
}

function fetchProductsWithStartAndSize() {
    let start = url.searchParams.get("start") || 0;
    let size = url.searchParams.get("size") || 999;

    fetch("/products/" + start + "/" + size, {
        method: "POST"
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        listProducts(jsonData);
    });

    getButtons(size);
}

function fetchProductsWithStartAndSizeAndCategory() {
    let start = url.searchParams.get("start") || 0;
    let size = url.searchParams.get("size") || 999;
    let category = url.searchParams.get("category");

    let request = {
        "name": category
    };

    fetch("/products/" + start + "/" + size, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        listProducts(jsonData);
    });

    getButtons(size, category);
}

function fetchAdvice(){
    fetch("/advice")
    .then(function (response){
        return response.json();
    })
    .then(function (jsonData){
        showAdvice(jsonData);
    })
}

function fetchImage(productId) {
    let productImage = document.querySelector(`#img-${productId}`);

    fetch('/image/' + productId + '/' + 0)
    .then(function(response) {
        if(response.status == 200) {
            return response.blob();
        }
        productImage.src = 'images/default.jpg';
    })
    .then(function(myBlob) {
        if(myBlob) {
            let objectURL = URL.createObjectURL(myBlob);
            productImage.src = objectURL;
        }
    });
}

function getButtons(size, category) {
    let buttons = document.querySelector('#page-change');
    let request = {
        "name": category
    };
    if(category) {
        fetch("/products/0/999", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            buttons.innerHTML = '';
            for(let i = 0; i < jsonData.length/size ; i++) {
                buttons.innerHTML += `<a href='index.html?start=${i*size}&size=${size}&category=${category}'><button type="button" class="btn btn-lm btn-outline-secondary">${i+1}</button></a>`;
            }
        });
    } else {
    fetch("/products")
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            buttons.innerHTML = '';
            for(let i = 0; i < jsonData.length/size ;i++) {
                buttons.innerHTML += `<a href='index.html?start=${i*size}&size=${size}'><button type="button" class="btn btn-lm btn-outline-secondary">${i+1}</button></a>`;
            }
        });
    }
}

function listProducts(jsonData) {
    let container = document.querySelector('#list-products');
    container.innerHTML = "";
    for (let i = 0; i < jsonData.length; i++) {
        container.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 box-shadow">
            <img class="card-img-top"
                id='img-${jsonData[i].id}'
                alt="surfboard image">
            <div class="card-body">
                <p class="card-text surf medium">${jsonData[i].name}</p>
                <p class="card-text">${jsonData[i].manufacture}</p>
                <div class="d-flex justify-content-between align-items-center">
                   <a href='product.html?address=${jsonData[i].address}'>
                    <div class="btn-group">
                         <button type="button" class="btn btn-lm btn-outline-secondary">Részletek</button>
                    </div>
                   </a>
                </div>
                <small class="text-muted">${jsonData[i].price}<span> Ft</span></small>
                <small class="text-muted">${jsonData[i].code}</small>
            </div>
        </div>
        </div>`;
    }
    for (var i = 0; i < jsonData.length; i++) {
        fetchImage(jsonData[i].id);
    }
}