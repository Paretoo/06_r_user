window.onload = function (){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => dataReady(data))
}

function dataReady(data){
    console.log(data);
    var result = data.results[0];

    var fullName = result.name.title + " " + result.name.first + " " + result.name.last;
    document.getElementById("full-name").innerHTML = fullName;

    var img = result.picture.large;
    document.getElementById("avatar-img").src = img;

    var userName = result.login.username;
    document. getElementById("user-name").innerHTML = userName;

    var userEmail = result.email;
    document.getElementById("email").innerHTML = userEmail;

    var userCountry = result.location.country;
    document.getElementById("country").innerHTML = userCountry;

}