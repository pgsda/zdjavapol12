function downloadProducts() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        var section = document.querySelector("main section");
        section.innerHTML = "";
        var productsList = JSON.parse(this.responseText);

        for(var i = 0; i < productsList.length; i++) {
            section.innerHTML += productsList[i].name;
        }
    }

    xhttp.open("GET", "produkty.json", true);
    xhttp.send();
}

downloadProducts();
