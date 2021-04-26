function Ride_Function() { //function that takes input from user and makes decision based on input, then prints the appropriate string.
    var Height, Can_ride; //declare variables Height, and Can_ride
    Height = document.getElementById("Height").value; //sets variable Height equal to the user input from the element with the id "Height"
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //if expression is True Can_ride will be set to the first string, False, the second.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function endorse(Drums, Cymbals, Sticks) { //creates the class "endorse" with the properties, Drums, Cymbals, Sticks.
    this.endorseDrums = Drums; //define the properties 
    this.endorseCymbals = Cymbals;
    this.endorseSticks = Sticks;
}

var Steve = new endorse("Pearl", "Zildjian", "Vater"); //create new object Steve of class endorse, and define properties.
var Tommy = new endorse("Tama", "Sabian", "Vic Firth"); //create new object Tommy of class endorse, and define properties.
var Louie = new endorse("Ludwig", "Paiste", "Promark");
function myEndorsements() { 
    document.getElementById("New_and_This").innerHTML = //access element with id "New_and_This" and change to string below when clicked.
    "Steve uses " + Steve.endorseDrums + " drums, " + Steve.endorseCymbals + " cymbals and " + 
    Steve.endorseSticks + " sticks.";
}

function myFunction() {
    document.getElementById("Nested_Function").innerHTML = inside_function();
    function inside_function() {
        var x = 17;
        return x - 12;
    }
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value; //Sets "Age" equal to user input from the element with the id "Age"
    Can_vote = (Age >= 18) ? "You can vote!":"You are not old enough to vote"; //if expression is true Can_vote is set to first statement, False, second.
    document.getElementById("Vote").innerHTML = Can_vote;//access element with the id "Vote" and set equal to Can_vote
}