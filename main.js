var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var LW = 5;
var color = "blue";
var mouseEvent;
var mouseX;
var mouseY;
var R = 5;
ctx.strokeStyle = color;
ctx.lineWidth = LW;
ctx.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    LW = document.getElementById("A").value;
    color = document.getElementById("C").value;
    R = document.getElementById("r").value;
    ctx.strokeStyle = color;
    ctx.lineWidth = LW;
    mouseEvent = "mousedown";
}
ctx.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    LW = document.getElementById("A").value;
    color = document.getElementById("C").value;
    R = document.getElementById("r").value;
    ctx.strokeStyle = color;
    ctx.lineWidth = LW;
    mouseEvent = "mouseup";
}
ctx.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = LW;
        R = document.getElementById("r").value;
        ctx.arc(mouseX, mouseY, R, 0, 2 * Math.PI);
    }
}