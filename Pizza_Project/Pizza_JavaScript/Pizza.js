function getReceipt() {
    //This initializes our string so it can get passed from function to function, growing 
    //line by line into a full receipt.
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; //declares a variable to store the running total
    var sizeTotal = 0; //declares a variable to store the price of the size of the pizza. 
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
    //sets the price of the pizza, according to which pizza was selected.
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
    runningTotal = sizeTotal; //sets the base price of the pizza as runningTotal.
    console.log(selectedSize+" = $"+sizeTotal+".00"); //prints concatenated string to the console.
    console.log("size text1: "+text1); //
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0; //declares a variable to store total number of toppings for pricing.
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
    var toppingCount = selectedTopping.length; //sets topping count equal to number of selected toppings
    if (toppingCount > 1) { //as long as there are any toppings selected
        toppingTotal = (toppingCount - 1); //change topping count to reflect discount.
    } else { //if no toppings selected, no discount is applied.
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); //adds topping and pizza price together to get total price.
    console.log("total selected topping items: "+toppingCount); //prints the topping count to the console.
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("toppingtext1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; //gets element "showText" and changes it to display the value at text1
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>"; //This show the total price next to the receipt, makes bold.
};