document.write("string" + 7 + "<br>"); // concatenate string and number and write to screen. <br> writes a line break.

document.write("5 > 7 = " + (5 > 7) + "<br>"); //evaluate expression, concatenate with strings and write to page.
document.write("5 < 7 = " + (5 < 7) + "<br>");
document.write("10 == 10 is " + (10 == 10) + "<br>");
document.write("10 == 11 is " + (10 == 11) + "<br>");

a = "10"; //declare variable a and set to the string "10"
b = "10"; //declare variable b and set to the string "10"
document.write(a === b); //compare the values and data types of a and b and write answer to page.

c = "10"; 
d = "steve"; //declare variable d and set to the string "steve"
document.write(c === d); //compare values and data types of c and d and write anwser to page.

e = "10";
f = 10;
document.write(e === f);

g = "10";
h = "11"
document.write(g === h);
document.write("<br>");

document.write(6 > 5 && 5 > 4); //evaluate and expression and write value to the page.
document.write(6 > 5 && 5 > 5); 
document.write(6 > 5 || 5 < 5); //evaluate or expression and write answer to the page.
document.write(6 > 6 || 4 < 3);
document.write("<br>");

document.write("3 is a " + (typeof 3) + "<br>");
document.write("'3' is a " + (typeof "3")); 


    
function myFunction() { //declare function and call it myFunction
    document.getElementById("infinity").innerHTML = 2.45E311; //access html element with the id infinity, change it to 2.45E311.
}

function negInfinity() {
    document.getElementById("negInfin").innerHTML = -2.45E311;
}

function notTrue() { //declare function and name it notTrue
    document.getElementById("notTrue").innerHTML = !(10 < 9); //access html element with the id "notTrue" and change to the value of the expression !(10 < 9).
}

function notFalse() {
    document.getElementById("notFalse").innerHTML = !(10 > 9);
}

console.log(10 + 10); //evaluate expression and display the result to the console.
console.log(10 > 11);
