function getReceipt() {
    //This initializes our string so it can get passed from function to function, growing 
    //line by line into a full receipt.
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; //declares a variable to store the running total
    var sizeTotal = 0;
    //creates a list of all the "size" elements
    var sizeArray = document.getElementsByClassName("size"); 
    //iterates through all "size" elements, if box is checked, add to new variable selectedSize
    //also add checked elements to receipt.
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>"
        }
    }
    //changes sizeTotal variable according to what was selected
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //assuming the size is the same as the price
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0; //declares a variable to store 
    var selectedTopping = []; //creates an empty array to hold selected toppings.
    //gets all topping elements and adds to an array.
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) { //iterates through toppingArray
        if (toppingArray[j].checked) { //checks if current element is checked
            selectedTopping.push(toppingArray[j].value); //adds current element to end of list
            console.log("selected topping item: ("+toppingArray[j].value+")"); //prints to the console
            text1 = text1+toppingArray[j].value+"<br>"; //adds selected toppings to the receipt.
        }
    }
    var toppingCount = selectedTopping.length; //
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("toppingtext1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
};