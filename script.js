var input = document.getElementById("input");
if(input){
  input.addEventListener("keyup", updateText);
}
var output = document.getElementById("output");
var mapObj = {
  "TWO_CHOICE":"➜&nbsp;&nbsp;&nbsp;",
  "UNSKIPPABLE":"",
  "PERSISTENT":"",
  "\\n":"<br>",
  "\"":"",
};
var iconMap = {
  28:"<img class=\"ico\" src=\"img/28.png\">",
  82:"<img class=\"ico\" src=\"img/82.png\">",
  28:"<img class=\"ico\" src=\"img/28.png\">",
  28:"<img class=\"ico\" src=\"img/28.png\">",
  28:"<img class=\"ico\" src=\"img/28.png\">",
  28:"<img class=\"ico\" src=\"img/28.png\">",
  28:"<img class=\"ico\" src=\"img/28.png\">",
  28:"<img class=\"ico\" src=\"img/28.png\">"
}
  function replaceShift(matched,p1,offset,string){
    var n = parseInt(p1, 16);
    var n = Math.floor(p1/4);
    var string = "";
    for(var i = 0; i<n; i++){
      string += " ";
    }
    return string;
 }
function boxBreak(matched,offset,string){
    return "<br><br><div class=\"boxbreak\">";
}
function codeToIcon(matched,p1,offset,string){
  var n = parseInt(p1, 16);
  console.log(n);
  return iconMap[n];
}
function updateText(){
  if(input.value)
    document.getElementById("output").innerHTML = input.value;
  input.value = input.value.replace(/\n/g, '');
  document.getElementById("output").innerHTML = input.value.replace(/TWO_CHOICE|UNSKIPPABLE|PERSISTENT|\\n|\"/gi, function(matched){return mapObj[matched]})
    .replace(/DEFINE_MESSAGE\(.*? /gi, '')
    .replace(/\s*QUICKTEXT_ENABLE\s*/gi,'')
    .replace(/\s*QUICKTEXT_DISABLE\s*/gi,'')
    .replace(/\sCOLOR\(RED\)\s/gi, '<a style=\'color:red\'>')
    .replace(/\sCOLOR\(DEFAULT\)\s/gi, '<a style=\'color:white\'>')
    .replace(/\sCOLOR\(ADJUSTABLE\)\s/gi, '<a style=\'color:green\'>')
    .replace(/\sCOLOR\(BLUE\)\s/gi, '<a style=\'color:blue\'>')
    .replace(/\sCOLOR\(LIGHTBLUE\)\s/gi, '<a style=\'color:lightblue\'>')
    .replace(/\sCOLOR\(PURPLE\)\s/gi, '<a style=\'color:purple\'>')
    .replace(/\sCOLOR\(YELLOW\)\s/gi, '<a style=\'color:yellow\'>')
    .replace(/\sCOLOR\(BLACK\)\s/gi, '<a style=\'color:black\'>')
    .replace(/\s*TEXTBOX_TYPE_BLACK,\s*/gi, '<div id="TEXTBOX_TYPE_BLACK"></div>')
    .replace(/\s*TEXTBOX_TYPE_BLUE,\s*/gi, '<div id="TEXTBOX_TYPE_BLUE"></div>')
    .replace(/\s*TEXTBOX_POS_TOP,\s*/gi, '<div id="TEXTBOX_POS_TOP"></div>')
    .replace(/\s*TEXTBOX_POS_MIDDLE,\s*/gi, '<div id="TEXTBOX_POS_MIDDLE"></div>')
    .replace(/\s*TEXTBOX_POS_BOTTOM,\s*/gi, '<div id="TEXTBOX_POS_BOTTOM"></div>')
    .replace(/\s*TEXTBOX_POS_VARIABLE\s*,/gi, '<div id="TEXTBOX_POS_VARIABLE"></div>')
    .replace(/SHIFT\(\\x(..)\)/gi, replaceShift)
    .replace(/BOX_BREAK/gi, boxBreak)
    .replace(/ITEM_ICON\(\\x(..)\)/gi, codeToIcon);
  if($("#TEXTBOX_TYPE_BLACK").length){
    $("#output").css("background-color", "#555");
  }
  else if($("#TEXTBOX_TYPE_BLUE").length){
    $("#output").css("background-color", "#008");
  }
  if($("#TEXTBOX_POS_TOP").length){
    $("#output").css("box-shadow", "0px -2px 4px lightblue");
  }
  else if($("#TEXTBOX_POS_MIDDLE").length){
    $("#output").css("box-shadow", "2px 0px 4px lightblue");
  }
  else if($("#TEXTBOX_POS_BOTTOM").length){
    $("#output").css("box-shadow", "0px 2px 4px lightblue");
  }
}
