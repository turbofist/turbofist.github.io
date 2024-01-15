var input = document.getElementById("input");
var output = document.getElementById("output");
var mapObj = {
  "COLOR(RED)":"<a style='color:red'>",
  "COLOR(DEFAULT)":"<a style='color:white'>",
  "COLOR(ADJUSTABLE)":"<a style='color:green'>",
  "COLOR(BLUE)":"<a style='color:blue'>",
  "COLOR(LIGHTBLUE)":"<a style='color:lightblue'>",
  "COLOR(PURPLE)":"<a style='color:purple'>",
  "COLOR(YELLOW)":"<a style='color:yellow'>",
  "COLOR(BLACK)":"<a style='color:black'>",
  TWO_CHOICE:"<a id=\"arrow\">➜&nbsp;&nbsp;&nbsp;</a>",
  QUICKTEXT_ENABLE:"",
  QUICKTEXT_DISABLE:"",
  BOX_BREAK:"<br><div class=\"boxbreak\">",
  "\\n":"<br>",
  "\"":""
};
input.addEventListener("keyup", updateText);
function updateText(){
  document.getElementById("output").innerHTML = input.value;
  input.value = input.value.replace(/\n/g, '');
  document.getElementById("output").innerHTML = input.value.replace(/COLOR\(RED\)|COLOR\(DEFAULT\)|COLOR\(DEFAULT\)|COLOR\(ADJUSTABLE\)|COLOR\(BLUE\)|COLOR\(LIGHTBLUE\)|COLOR\(PURPLE\)|COLOR\(YELLOW\)|COLOR\(BLACK\)|TWO_CHOICE|BOX_BREAK|QUICKTEXT_ENABLE|QUICKTEXT_DISABLE|\\n|\"/gi, function(matched){return mapObj[matched]});
}