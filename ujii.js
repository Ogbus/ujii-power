// Creating a mini calculator
var firsst = prompt("enter a number:");
var seconsd = prompt("enter a second number:");
var sums = Number(firsst + seconsd);
alert(sum);

var firsts = prompt("enter a number:");
var seconds = prompt("enter a second number:");
var subtract = Number(firsts - seconds);
alert(subtract);

var firstss = prompt("enter a number:");
var secondss = prompt("enter a second number:");
var multiply = Number(firstss * secondss);
alert(multiply);

var firstsss = prompt("enter a number:");
var secondsss = prompt("enter a second number:");
var divide = Number(firstss / secondss);
alert(divide);

// Building a smart car key with variables and conditionals
var age = prompt("Please enter your age:");
var verify = Number(age);
if (verify < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (verify === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else {
    alert("Powering On. Enjoy the ride!")
}

// Building a smart car key with function, prompt() and conditionals
function checkDriver() {
    var age = prompt("Please enter your age:");
    var verify = Number(age);
    if (verify < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (verify === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!")
    } else {
        alert("Powering On. Enjoy the ride!")
    } 
}

// Building a smart car key with function, parameter and conditionals
function checkDriver2(age) {
    if (age < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (age === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!")
    } else {
        alert("Powering On. Enjoy the ride!")
    } 
}