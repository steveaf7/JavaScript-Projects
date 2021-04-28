function countdown() {//declare function and call it countdown
    var seconds = document.getElementById("seconds").value; 
    //var seconds is set equal to the value inputted by the user.
    function tick() { //declare function and call it tick
        seconds = seconds - 1; //subtract 1 from seconds and save the new value as seconds
        timer.innerHTML = seconds; //access element with id "timer" and change to display seconds
        setTimeout(tick, 1000); //tells the computer to wait one second.
    if(seconds == -1){ //if seconds is less than zero, 
        alert("Time's up!"); //alert the user that the timer is up
    }
        }
    tick();//calls the function tick()
}


var slideIndex = 1; //sets the slideindex variable to one so the page will load the first slide.
    showSlides(slideIndex);//runs showSlides() with the slideIndex of 1

// Next/previous controls
function plusSlides(n) { //function for when the next or previous button is clicked
    showSlides(slideIndex += n); //calls the showSlides() function with the argument 
}                              //responding to the next or previous slide.

// Thumbnail image controls
function currentSlide(n) { //makes the dots clickable
    showSlides(slideIndex = n); //calls the showslides function when the dots are clicked
                                //with n as the dot number corresponding with the slide number.
}


function showSlides(n) {
    var i; //declare variable i
    var slides = document.getElementsByClassName("mySlides"); //set variable slides to elements with class name "slides"
    var dots = document.getElementsByClassName("dot"); //set variable dots to all elements with class name "dots"
    if (n > slides.length) {slideIndex = 1} //tells the computer if n reaches the number of slides, go back to 1
    if (n < 1) {slideIndex = slides.length} //tells the computer if n becomes less than 1, go to the last slide.
    for (i = 0; i < slides.length; i++) { //sets i = 0, code below will run if i < slides.length, if not move on.  
                                            //adds 1 to i every time code block is executed
        slides[i].style.display = "none"; //accesses the display of the slide and changes it to none.
    }
    for (i = 0; i < dots.length; i++) { //sets i = 0, code below will run if i < dots.length, adds 1 to i every time loop is executed.
        dots[i].className = dots[i].className.replace(" active", "");//replaces the class active with ""
    }
    slides[slideIndex-1].style.display = "block";//changes the display of the previous slide to block
    dots[slideIndex-1].className += " active";//changes the class of the previous dot to active
}

