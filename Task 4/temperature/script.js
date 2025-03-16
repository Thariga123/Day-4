function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius !== "") {
        let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else {
        document.getElementById("fahrenheit").value = "";
    }
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit !== "") {
        let celsius = (parseFloat(fahrenheit) - 32) * 5/9;
        document.getElementById("celsius").value = celsius.toFixed(2);
    } else {
        document.getElementById("celsius").value = "";
    }
}