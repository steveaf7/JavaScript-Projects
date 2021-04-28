
function Call_Loop() {
    var Digit = ''; //defines the type of the var Digit, value is empty
    var X = 11;
    while (X > 0) { //enter while loop, repeat below code until X <= 0
        Digit += "<br>" + X; //concatenates to the string every time loop is executed
        X--; //subtracts one from X every time loop is executed.
    }
    document.getElementById("Loop").innerHTML = Digit; //prints Digit in the place of element with id "Loop"
}

function getLength() {
    var strng = document.getElementById("strng").value; //set strng equal to string entered by the user.
    //calculates length of sting and concatenates with string to produce a sentence. 
    var strngSentence = "The string you entered is " + strng.length + " characters long.";
    //prints sentence in place of element with id "prntLength"
    document.getElementById("prntLength").innerHTML = strngSentence;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //creates an array with values expressed as an array
var Content = ""; //creates empty variable content
var Y;
function for_Loop() { //declare function and name it
    for (Y = 0; Y < Instruments.length; Y++) { //enter for loop with parameters
        Content += Instruments[Y] + "<br>";  //code to be executed in for loop, adds an instrument and a line break to string     
    }                                           //every time the loop is executed.
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dogs = []; //creates an empty array;
    Dogs[0] = "Bandit"; //adds a value "Bandit" to the array at index 0
    Dogs[1] = "Ninja"; // adds value "Ninja" to the array at index 1
    Dogs[2] = "Rottie";
    Dogs[3] = "Darby";
    //concatenates strings, with values accessed by indices from the array and prints it in the place of element with id "Array"
    document.getElementById("Array").innerHTML = Dogs[0] + " was our first dog then we got " + Dogs[1] + 
    ", they had puppies and " + Dogs[2] + " and " + Dogs[3] + " were born!"; 
    
}



function constant_function() {
    //creates constant array, propeties cannot be updated
    const steveDrums = {pedal:"Demon Drive", sticks:"Vater Fatback 3A", drums:"Pearl Export"} 
    steveDrums.sticks = "Jay Weinberg Signature"; //updates value at property sticks inside array steveDrums
    steveDrums.cymbals = "Paiste Heavy Ride"; //creates new property inside steveDrums called cymbals and sets value
    document.getElementById("Constant").innerHTML = "Steve now uses " + 
        steveDrums.sticks + " and the " + steveDrums.cymbals;
}

function letFunction() { //function to display how var and let have different scope.
    var X = "var"
    document.getElementById("useVar").innerHTML = "X = " + X;
    {
        let X = "let"
        document.getElementById("useLet").innerHTML = "X = " + X;
    }
    document.getElementById("varAgain").innerHTML = "X = " + X;
}

function Break() { //function to display how the break statement works
    var text = "";
    for (i = 0; i < 6; i++) {
        if (i === 3) { break; } //when i becomes 2 and the loop gets to this point, stops the loop, move to the next line of code.
        text += "This is iteration number " + i + "<br>"; 
    }
    document.getElementById("Break").innerHTML = text;
}

function Continue() { //function that shows how the continue statement works.
    var text = "";
    for (i = 0; i < 6; i++) {
        if (i === 3) { continue; } //when i becomes 2, do not execute below code, go back to beginning of for loop.
        text += "This is iteration number " + i + "<br>"; 
    }
    document.getElementById("Continue").innerHTML = text;
}

let drumset = { //create object with let
    pedal: "Demon Drive", //define object properties
    sticks: "Jay Weinberg Signature",
    ride: "Paiste Heavy Ride",
    throne: "Roland",
    brand: "Pearl",
    description: function() { //this properties contains a function
        return "Steve uses a " + this.brand + " kit with a " + this.pedal + 
        " pedal and " + this.sticks + " sticks." //this sentence is concatenated and returned as the value at the property function
    }
};
document.getElementById("Drumset_Object").innerHTML = drumset.description();