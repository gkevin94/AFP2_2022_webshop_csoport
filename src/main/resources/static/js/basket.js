fetchBasket();

function fetchBasket(){
    var url = "/basket";
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData) {
            var productId = jsonData;
            console.log(jsonData);
            showBasket(jsonData);
        });
}

function fetchImage(productId) {
    var productImage = document.getElementById(`img-${productId}`);
    console.log(productImage);
    console.log(productId);

    fetch('/image/' + productId + '/' + 0)
        .then(function(response) {
            if(response.status == 200) {
                return response.blob();
            }
            productImage.src = 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg';
        })
        .then(function(myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            productImage.src = objectURL;
        });
}
