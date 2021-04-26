var reservedWord = this;
document.write(reservedWord);

function DogBreed(Colors, Size, Type) {
    this.DogBreed_Colors = Colors;
    this.DogBreed_Size = Size;
    this.DogBreed_Type = Type;
}

var GermanShepherd = new DogBreed("black and brown", "large", "working");
var Husky = new DogBreed("white and grey", "large", "howling");

function myFunction() {
    document.getElementById("paragraph").innerHTML = "Huskies are " + Husky.DogBreed_Size
    + "," + Husky.DogBreed_Colors + " dogs that enjoy " + Husky.DogBreed_Type + ".";
}