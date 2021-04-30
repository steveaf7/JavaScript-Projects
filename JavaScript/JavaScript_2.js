function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Must be valid email");
        return false;
    }
}