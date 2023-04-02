function sum(a, b) {
    return a + b;
}
var button = document.querySelector("button");
button.addEventListener("click", function () {
    var numberone = document.getElementById('number1');
    var numbertwo = document.getElementById('number2');
    var num1value = +numberone.value;
    var num2value = +numbertwo.value;
    if (isNaN(num1value) || isNaN(num2value)) {
        alert("Error");
    }
    else {
        console.log(sum(num1value, num2value));
    }
});
