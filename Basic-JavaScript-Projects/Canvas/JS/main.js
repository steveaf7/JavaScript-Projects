var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 450, 200);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "green");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(50, 50, 400, 150);