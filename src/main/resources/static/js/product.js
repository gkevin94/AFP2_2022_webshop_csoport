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

