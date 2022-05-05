function handleFormSubmit() {

    var div = document.querySelector('#response-box');
    var form = document.forms["form-register"];
    if(form.confirm.value!=form.password.value) {
        div.setAttribute("class", "alert alert-danger");
        div.innerHTML = "A két jelszó nem egyezik!";
        return;
    }
    var request = {
        "name" : form.name.value,
        "userName" : form.username.value,
        "password" : form.password.value
    }
    console.log(request);
    fetch("/users",{
        method: "POST",
        body: JSON.stringify(request),
        headers:{
            "Content-type": "application/json"
        }
    })
        .then(function(response){
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            if(json.status=="OK") {
                div.setAttribute("class", "alert alert-success")
                div.innerHTML = "Sikeres regisztráció! Átirányítunk...";
                setTimeout(function(){
                    window.location.href = "/login.html";
                }, 1000);
            } else {
                div.innerHTML = json.message;
                div.setAttribute("class", "alert alert-danger");
                form.name.focus();
            }});

    return false;
}
