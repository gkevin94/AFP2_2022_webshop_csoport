window.addEventListener('load', init);

var productId = parseInt(window.location.href.split("=")[1]);
var imageContainer = document.querySelector("#image-container");

fetchImage(productId, 0);

function init() {
    let uploadButton = document.getElementById('uploadButton');
    uploadButton.addEventListener('click', startUpload);
    document.querySelector("#fileToUpload").addEventListener("change", function(){
        document.querySelector("[for='"+ this.id +"']").innerText = this.files[0].name;
    })
}
