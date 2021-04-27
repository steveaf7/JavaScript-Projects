function sentence() { //function that concatenates parts of a sentence into a whole sentence using concat(). 
    var part_1 = "This is the " //define the parts of the sentence.
    var part_2 = "sentence that, "
    var part_3 = "when combined, "
    var part_4 = "will be the mother "
    var part_5 = "of all sentences."
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5); 
    //use concat() to merge the parts together into whole_sentence.
    document.getElementById("Concatenate").innerHTML = whole_sentence;
    //replace the element with the id "Concatenate" with whole_sentence;
}

function slice_Method() { //function that takes a piece of a sentence and displays it.
    var string = "Rottie is sniffing the cords over next to me"; 
    var sliced = string.slice(10,18); //sets to variable sliced to the characters at the indices 10-18, not including 18.
    sliced = sliced.toUpperCase(); //changes sliced to all uppercase letters
    document.write("Slice:" + sliced + "<br>");
}

slice_Method(); //invokes slice_Method

function upperCase() { //function that changes a sentence to Uppercase
    var sentence = "Rottie is sniffing the cords to the right of me";
    var big_letters = sentence.toUpperCase();
    document.write("Uppercase:" + big_letters + "<br>");
}

upperCase();

function to_search() {
    var sentence = "Bandit is scratching outside the door right now.";
    var s = sentence.search("scratching");
    document.write("The word 'scratching' is located at index " + s + "<br>" + "<br>");
}

to_search();

function string_Method() { //converts a number to a string and displays it on the screen.
    var X = 471;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision() { //takes a number a converts it to a specified amount of digits, either taking off digits, or adding zeroes.
    var X = 976523.12454657687
    document.getElementById("Precision").innerHTML = X.toPrecision(9);
}

function fixed() { //changes the number to fixed digits after decimal point. default rounds to whole number.
    var X = 976523.12454657687
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}

function value() { //returns the primitive value of a string object.
    var X = "This is string to demonstrate the valueOf method.";
    document.getElementById("value").innerHTML = X.valueOf();
}