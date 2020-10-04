function downloadProducts() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        console.log(this.responseText);
    }

    xhttp.open("GET", "produkty.json", true);
    xhttp.send();
}

downloadProducts();
