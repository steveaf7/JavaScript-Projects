function myDictionary() { //define a function and name it myDictionary()
    var Animal = { //create a dictionary and name it.
        Species:"Dog", //define dictionary property and assign string value.
        Color:"Brown", //define dictionary property and assign string value.
        Breed:"German Shepherd",
        Age:5,
        Sound:"Woof!"
    };
    delete Animal.Sound; //Access the property Sound within the dictionary Animal and delete it.
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //access the element with the id "Dictionary" and change it to the value located at Animal.Sound
}