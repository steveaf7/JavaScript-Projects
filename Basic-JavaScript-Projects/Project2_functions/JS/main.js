function myFunction() { //create a function and call it myFunction() 
    var str = "It's Friday!"; // define variable str and set the value to string
    var result = str.fontcolor("brown"); // use fontcolor method on str and set it to new variable result 
    document.getElementById("brown_text").innerHTML = result;//access html elements with the class "brown_text" and change to result
}
function myMouseover() { //create function and name it
    var str = "It's Friday! " // define var str and set equal to string 
    str += "and it's time for some JavaScript." // change value of str to str plus string
    document.getElementById("add_strings").innerHTML = str // access html element with class "add_strings" and set equal to str
}
