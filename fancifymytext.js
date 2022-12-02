function hello(){
    alert("Hello, world!"); 
}
function Bigger(){
    hello();
    document.getElementById("text").style.fontSize = "24pt";
}
function Fancy(){
    alert("We'll make it fancy for you!");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}
function Betty(){
    alert("We'll make it boring for you!");
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "Black";
    document.getElementById("text").style.textDecoration = "none";
}
function Moo(){
    var text = document.getElementById("text");
    var parts = text.value.split(".");
    text.value = parts.join("-Moo.");
}