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

function fetchAnotherImage(productId, offset) {
    fetch('/image/' + productId + '/' + offset)
        .then(function(response) {
            if(response.status == 200)
                return response.blob();
        })
        .then(function(blob) {
            if(blob) {
                imageContainer.innerHTML += `<div class="carousel-item">
                                          <img class="d-block w-100" id='img-${offset}' alt="surf">
                                      </div>`;
                document.querySelector(`#img-${offset}`).src = URL.createObjectURL(blob);
                fetchAnotherImage(productId, offset+1);
            }
        });
}

function showFeedbacks(jsonData) {

    var feedbacks = document.getElementById('feedbacks');
    feedbacks.innerHTML = '';

//  Display the feedback of the registered User
    var defaultUserFeedback = "";

    if(typeof user != "undefined"){

        var userId = user.id;
        for(var i = 0; i < jsonData.length; i++){
            if(jsonData[i].user.id == userId){
                defaultUserFeedback = jsonData[i].feedback;
                break;
            }
        }
    }
    var registeredUsersFeedbackTextArea = document.getElementById("feedback-text");
    registeredUsersFeedbackTextArea.innerHTML = defaultUserFeedback;
    console.log(defaultUserFeedback);
//    ------------------

// Listing feedbacks

    var visibility;

    var star =' <font color="#c59b08">&starf;</font>';

    for (var i = 0; i < jsonData.length; i++) {
//  Setting the visibility of the delete button
        star =' <font color="#c59b08">&starf;</font>';
        star = star.repeat(jsonData[i].rating);
        visibility = 'hidden';
        if(jsonData[i].user.id == userId){
            visibility = 'visible';
        }
        feedbacks.innerHTML += `
      <div class="container">
          <div>
              <div id="carousel-feedbacks" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                      <div class="item active">
                          <div class="col-md-4 col-sm-6">
                              <div class="block-text rel zmin">
                              <div class="ad-right" id="feedback-and-delete-buttons">
                              <button onclick="deleteFeedback(${jsonData[i].id})" id="deleteFeedback#"+${jsonData[i].id} class="btn btn-danger" ${visibility}><i class='fas fa-trash-alt'></i></button>
                              </div>
                                  <small class="text-muted">Dátum: ${jsonData[i].feedbackDate.replace('T', ' ')}</small>
                                  <div class="mark">Értékelés: ${star}<span class="rating-input"><span
                                          data-value="0"
                                          class="glyphicon glyphicon-star"></span><span
                                          data-value="1" class="glyphicon glyphicon-star"></span><span data-value="2"
                                                                                                       class="glyphicon glyphicon-star"></span><span
                                          data-value="3" class="glyphicon glyphicon-star"></span><span data-value="4"
                                                                                                       class="glyphicon glyphicon-star-empty"></span><span
                                          data-value="5" class="glyphicon glyphicon-star-empty"></span>  </span>
                                  </div>
                                  <div id="feedback#${jsonData[i].id}">
                                  <p id = "fb">${jsonData[i].feedback}</p>
                                  </div>
                                  <ins class="ab zmin sprite sprite-i-triangle block"></ins>
                              </div><br>
                              <div class="person-text rel" >
                              <img src="images/member.png"/>
                                  <span class= "surf medium">${jsonData[i].user.name}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


                `;
    }
}

function repeat(starsNumber){

    for(var i = 0 ;i < starsNumber; i++) ;
}

function addToBasket() {
    var quantity = document.querySelector('#inputQuantity').value;
    var address = (new URL(document.location)).searchParams.get('address');
    var url = '/basket/' + address;

    var request = {
        'pieces': quantity
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            if (jsonData != -1) {
                addGoToBasketButton();
                basketRefresh();
            }
        });
}
