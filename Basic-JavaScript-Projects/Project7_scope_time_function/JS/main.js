var X = 12; //declaring and defining global variable
function myFunction() {
    var Y = 34; //declaring and defining local variable
    document.write(Y - X); //writes the resulting value to the top of the html document
    console.log(Y - X); //writes the resulting value to the console
}

function otherFunction() { 
    var Z = 14;
    document.write(Y - Z); //tries to use a variable from myFunction, causes reference error
    console.log(Y - Z);  //writes the resulting value to the console. (also causes refernce error)
}

myFunction(); //tells myFunction() to run.
otherFunction(); //calls otherFunction()

//function that gets the time and chooses the proper greeting to display.
function getDate() { 
    var Time = new Date().getHours() // sets variable time to current hour value, in military time.
    var Reply; //declare, but not define, variable Reply
    if (Time > 18) { //if it's past six
        Reply = "Have a good night!"; //set variable Reply to string
    }
    else if (Time < 10) { //if it's before ten, and not past six
        Reply = "Top of the morning to ya!";
    }
    else { //if the if and else if statements were both false
        Reply = "Good Day!";
    }
    document.getElementById("Greeting").innerHTML = Reply;
    //change the element with the id "Greeting" to the value stored at Reply
}





// function that decides whether you are old enough to rent a car based on user input
// prints one response if true, or a different response if false.
function ageResponse() {
    var age = document.getElementById("Age").value //sets the variable age to the value that was
                                                    //recorded from the input box
    if (age < 25) { //if age is less than 25
        document.getElementById("response").innerHTML = //access element with the id "response" 
        "Sorry you are not old enough to rent a car"    // and change to string
    }
    else {    //execute below if if statement was false
        document.getElementById("response").innerHTML =
        "Would you like economy midsize, or luxury?"
    }
}

//Time function
function Time_function() {
    var Time = new Date().getHours(); // sets variable time to current hour value, in military time.
    var Reply; //declare, but not define, variable Reply
    if (Time < 12 == Time > 0) { //if time is between midnight and noon, 
        Reply = "It is morning time!"; //set reply to corresponding string
    }
    else if (Time >= 12 == Time < 18) { //if time not between midnight and noon, but between noon and 6
        Reply = "It is afternoon."; //set reply to string
    }
    else { //is neither the if or else if expressions are true,
        Reply = "It is evening time."; //set reply to corresponding string.
    }
    document.getElementById("Time_of_day").innerHTML = Reply; 
    //change the element with the id "Time_of_day" to the string saved as the variable Reply
}