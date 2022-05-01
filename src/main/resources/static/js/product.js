window.onload = function () {
    fetchProduct();
};

var product;
var user;
var feedbacks;

var imageContainer = document.querySelector("#image-container");
imageContainer.innerHTML = "";
imageContainer.innerHTML += `<div class="carousel-item active">
                                 <img class="d-block w-100" id="image" alt="surf">
                             </div>`;

$.getJSON('/user', json => {
    if(json.id != 0){
        var userId = json.id;
        fetchUser(userId);
    }
    if (json.role != 'VISITOR') {
        document.querySelector('#addToBasketButton').hidden = false;
    }
});

function fetchUser(userId) {
    var url = '/users/' + userId;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            user = jsonData;
        });
    return false;
}

function fetchProduct() {
    var address = (new URL(document.location)).searchParams.get('address');

    var url = '/product/' + address;

    if (url == '/product/') {
        showProductNotFound();
        return;
    }

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            if (jsonData.status == 'NOT_OK') {
                showProductNotFound();
                return;
            } else {
                product = jsonData;
                var productId = jsonData.id;
                fetchFeedbacks(productId);
                fetchImage(productId);
                showProduct(jsonData);
            }
        });
    return false;
}

function fetchFeedbacks(productId) {
    var url = '/feedback/' + productId;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            feedbacks = jsonData;
            showFeedbacks(jsonData);
        });
}

function fetchImage(productId) {
    fetch('/image/' + productId + '/' + 0)
        .then(function(response) {
            if(response.status == 200)
                return response.blob();
            else
                document.querySelector("#image").src = 'images/default.jpg';
        })
        .then(function(blob) {
            document.querySelector("#image").src = URL.createObjectURL(blob);
            callBackFunction(productId);
        });
}

function callBackFunction(productId) {
    setTimeout(function(){ fetchAnotherImage(productId, 1); }, 1000);
}
