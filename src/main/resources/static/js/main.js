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