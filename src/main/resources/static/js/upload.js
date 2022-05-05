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

function startUpload() {
    let file = document.getElementById('fileToUpload').files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('productId', productId);

    fetch('/image', {
        method: 'POST',
        body: formData
    }).then(response => {
        return response.text();
    }).then(message => {
        alert(message);
        document.getElementById('uploadForm').reset();
        let messageNode = document.getElementById('messageP');
        fetchImage(productId, 0);
    });
}
