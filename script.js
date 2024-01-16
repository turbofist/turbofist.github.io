var input = document.getElementById("input");
if(input){
  input.addEventListener("keyup", updateText);
}
var output = document.getElementById("output");
var mapObj = {
  "COLOR\(RED\)":"<a style='color:red'>",
  "COLOR\(DEFAULT\)":"<a style='color:white'>",
  "COLOR\(ADJUSTABLE\)":"<a style='color:green'>",
  "COLOR\(BLUE\)":"<a style='color:blue'>",
  "COLOR\(LIGHTBLUE\)":"<a style='color:lightblue'>",
  "COLOR\(PURPLE\)":"<a style='color:purple'>",
  "COLOR\(YELLOW\)":"<a style='color:yellow'>",
  "COLOR\(BLACK\)":"<a style='color:black'>",
  "TWO_CHOICE":"➜&nbsp;&nbsp;&nbsp;",
  "QUICKTEXT_ENABLE":"",
  "QUICKTEXT_DISABLE":"",
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
    var n = parseInt(p1);
    var n = Math.floor(p1/3);
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
  document.getElementById("output").innerHTML = input.value.replace(/(COLOR\(RED\)|COLOR\(DEFAULT\)|COLOR\(DEFAULT\)|COLOR\(ADJUSTABLE\)|COLOR\(BLUE\)|COLOR\(LIGHTBLUE\)|COLOR\(PURPLE\)|COLOR\(YELLOW\)|COLOR\(BLACK\)|TWO_CHOICE|UNSKIPPABLE|QUICKTEXT_ENABLE|QUICKTEXT_DISABLE|PERSISTENT|\\n|\")/gi, function(matched){return mapObj[matched]}).replace(/DEFINE_MESSAGE\(.*? /gi, '').replace(/TEXTBOX_TYPE_BLACK, /gi, '<div id="TEXTBOX_TYPE_BLACK"></div>').replace(/TEXTBOX_TYPE_BLUE,/gi, '<div id="TEXTBOX_TYPE_BLUE"></div>').replace(/TEXTBOX_POS_TOP,/gi, '<div id="TEXTBOX_POS_TOP"></div>').replace(/TEXTBOX_POS_MIDDLE,/gi, '<div id="TEXTBOX_POS_MIDDLE"></div>').replace(/TEXTBOX_POS_BOTTOM,/gi, '<div id="TEXTBOX_POS_BOTTOM"></div>').replace(/TEXTBOX_POS_VARIABLE,/gi, '<div id="TEXTBOX_POS_VARIABLE"></div>').replace(/SHIFT\(\\x(..)\)/gi, replaceShift).replace(/BOX_BREAK/gi, boxBreak).replace(/ITEM_ICON\(\\x(..)\)/gi, codeToIcon);
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
