fetchUserDeliveries()

function fetchUserDeliveries(){
    var url = "/delivery";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
           showdeliveries(jsonData);
        });
}

function showDeliveries(jsonData){
    var deliveryDiv = document.querySelector('#deliveryDiv');
    for (let i = 0; i < jsonData.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'delivery-box', 'd-flex justify-content-center');
        div.setAttribute('id', `div${i}`);
        div.innerHTML = `<p>${jsonData[i].deliveryAddress}</p><br><input type='radio' id="input${i}" class='radio-input' name="delivery" >`
        deliveryDiv.appendChild(div);        
    }
}

function addNewAddress(){
    var div = document.querySelector('#new-address');
    div.innerHTML = `<label for="inputNewAddress" >Szállítási cím megadása (ország, város, utca, házszám, emelet, irányítószám)</label>
     <input type="text" id="inputNewAddress" onfocus=checkoutRadios() max-length=255 style="width:600px;">`;
}