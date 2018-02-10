"use strict"

document.getElementById("product__buy").addEventListener("click", function () {
    var quantity = document.getElementById("product__quantity").value;
    alert("Congradulations! You bought number of product!\n" +
    "Quantity: " + quantity + "\n" + 
    "P.S. Not really, this is just dummy script");
});
