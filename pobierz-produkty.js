function downloadProducts() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        var section = document.querySelector("main section");
        var productsList = JSON.parse(this.responseText);

        var productsTable = "<table>";

        for(var i = 0; i < productsList.length; i++) {
            // section.innerHTML += productsList[i].name;
            productsTable += `<tr><td>${productsList[i].name}</td><td>${productsList[i].price}</td></tr>`;
        }

        productsTable += "</table>";
        section.innerHTML = productsTable;
    }

    xhttp.open("GET", "produkty.json", true);
    xhttp.send();
}

downloadProducts();
