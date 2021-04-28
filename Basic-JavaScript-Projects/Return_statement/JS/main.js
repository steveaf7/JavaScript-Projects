function returnStatement() {
    var X = 12;
    var Y = 16;
    return 12 * 16;
}
var Z = returnStatement();
document.getElementById("return").innerHTML = Z;