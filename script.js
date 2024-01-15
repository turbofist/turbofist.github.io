var input = document.getElementById("input");
var output = document.getElementById("output");
input.addEventListener("keyup", updateText);
function updateText(){
  document.getElementById("output").innerHTML = input.value;
}
