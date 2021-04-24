function myFunction() { //define a function and name it myFunction
    var x = 765; // define variable x and set the value to 765
    var y = 273; //define variable y and set the value to 273
    document.getElementById("Math").innerHTML = x + y; //access the element with the id "Math" and set it the result of x + y
}

function subtractThis() { //define a function and name it subtractThis
    var answer = 765 - 273; //define variable answer and set the value to the result of 765-273
    document.getElementById("Subtract").innerHTML = answer; //access the element with the id "Subtract" and change it to the value stored in answer
}

function multiplication() { //define a function and name it multiplication
    var answer = 765 * 273; //define the variable answer and set it equal to 763*273
    document.getElementById("multiply").innerHTML = answer; //access the element with the id "multiply" and change it to the value stored in answer
}

function division() {
    var answer = 765 / 273;
    document.getElementById("divide").innerHTML = answer;
}

function math() {
    var answer = 47 - 12 / 16 + 56 * 127;
    document.getElementById("multiple").innerHTML = answer;
}

function modulus() {
    var answer = 765 % 273;
    document.getElementById("remainder").innerHTML = answer;
}

function negation() {
    var y = 765;
    document.getElementById("negative").innerHTML = -y;
}

function random() {
    document.getElementById("random").innerHTML = Math.random() * 10000;
}
var g = 1 //put this variable outside the function so every time it's clicked it adds one again. If you put it inside the function it will redefine g as 1 every time the function runs
function incrementThis() {
    g++;
    document.getElementById("increment").innerHTML = g;
}
var h = 100
function decrementThis() {
    h--;
    document.getElementById("decrement").innerHTML = h;
}

document.write("the square root of 144 is " + Math.sqrt(144))// write string and result of Math.sqrt(144) to the page