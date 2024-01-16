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
  "PERSISTENT":"",
  "\\n":"<br>",
  "\"":"",
};
function updateText(){
  if(input.value)
    document.getElementById("output").innerHTML = input.value;
  input.value = input.value.replace(/\n/g, '');
  document.getElementById("output").innerHTML = input.value.replace(/(COLOR\(RED\)|COLOR\(DEFAULT\)|COLOR\(DEFAULT\)|COLOR\(ADJUSTABLE\)|COLOR\(BLUE\)|COLOR\(LIGHTBLUE\)|COLOR\(PURPLE\)|COLOR\(YELLOW\)|COLOR\(BLACK\)|TWO_CHOICE|QUICKTEXT_ENABLE|QUICKTEXT_DISABLE|PERSISTENT|\\n|\")/gi, function(matched){return mapObj[matched]}).replace(/DEFINE_MESSAGE\(.*? /gi, '').replace(/TEXTBOX_TYPE_BLACK, /gi, '<div id="TEXTBOX_TYPE_BLACK"></div>').replace(/TEXTBOX_TYPE_BLUE, /gi, '<div id="TEXTBOX_TYPE_BLUE"></div>');
  if($("#TEXTBOX_TYPE_BLACK").length){
    $("#output").css("background-color", "#555");
  }
  else if($("#TEXTBOX_TYPE_BLUE").length){
    $("#output").css("background-color", "#008");
  }
}
