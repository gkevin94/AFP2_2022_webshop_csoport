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
