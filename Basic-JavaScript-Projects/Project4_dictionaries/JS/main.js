function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"German Shepherd",
        Age:5,
        Sound:"Woof!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}