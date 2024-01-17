@import url('https://cdn.jsdelivr.net/gh/ngarces/FE15-Text-Simulator/FOT-ChiaroStd-B.otf');
@font-face {
    font-family: fot-chiaro_stdb;
    src: url('https://cdn.jsdelivr.net/gh/ngarces/FE15-Text-Simulator/FOT-ChiaroStd-B.otf') format("opentype");
}
body{
  background-color: #111;
}

.selectbox{
  top: 30px;
  position: absolute;
  display: inline-block;
  color: white;
  background-color: #222;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  font-family: 'fot-chiaro_stdb', Arial;
  color: #EEE;
  border: none;
}

#textid{
  background-color: #333;
  font-family: 'fot-chiaro_stdb', Arial;
  color: #EEE;
  width: 50px;
  height: 20px;
  display: inline-block;
  margin-top: 34px;
}

#copybutton{
  right: 330px;
  bottom: 395px;
  color: white;
  background-color: black;
  font-family: 'fot-chiaro_stdb', Arial;
  border-radius: 5px;
  border: none;
  position: fixed;
}

#copybutton:hover{
  background-color: #222;
  cursor: pointer;
  border: 1px solid white;
}

#defineoutput{
  bottom: 339px;
  right: 65px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  display: inline-block;
  position: fixed;
  height: 30px;
  width: 600px;
  padding: 5px;
  font-family: 'fot-chiaro_stdb', Arial;
  color: white;
  text-wrap: nowrap;
}

#input{
  display: none;
}

#inputdiv{
  display: inline-block;
  position: fixed;
  bottom: 400px;
  right: 265px;
}

#boxtype{
  margin-left: 20px;
}

#boxpos{
  margin-left: 120px;
}

#otherinput{
  bottom: 140px;
  left: 20px;
  font-family: 'fot-chiaro_stdb', Arial;
  vertical-align: top;
  text-align: center;
  line-height: 28px;
  font-size: 20px;
  font-family: 'fot-chiaro_stdb', Arial;
  color: white;
  text-align: left;
  white-space: pre-wrap;
  word-spacing: 5px;
  padding-left: 64px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-top: 14px;
  position: fixed;
  text-wrap: nowrap;
  height: 120px;
  width: 420px;
  background-color: #555;
  border-radius: 20px;
}
#outputcollection{
  position: absolute;
  display: inline-block;
}
#codeoutput{
  bottom: 40px;
  right: 64px;
  vertical-align: top;
  text-align: center;
  line-height: 28px;
  font-size: 20px;
  font-family: 'fot-chiaro_stdb', Arial;
  color: white;
  text-align: left;
  white-space: pre-wrap;
  word-spacing: 5px;
  margin-left: 4px;
  margin-bottom: 0px;
  position: fixed;
  text-wrap: nowrap;
  height: 300px;
  width: 612px;
  background-color: #555;
  display: inline-block;
  border-radius: 20px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.inputrectangle{
  height: 120px;
  width: 420px;
  background-color: #555;
  display: inline-block;
  border-radius: 20px;
  margin: auto;
}

#commandListWindow{
  top: 0;
  left: 0;
  background-color: #333;
  color: white;
  display: none;
  font-family: 'fot-chiaro_stdb';
  font-size: 14px;
  max-width: 600px;
  max-height: 650px;
  vertical-align: top;
  padding-top: 0px;
  padding-left: 5px;
  padding-right: 8px;
  border-radius: 15px;
  overflow: auto;
}
#commandListButton{
  background-color: #333;
  border: none;
  display: inline-block;
  color: #AAA;
  border-radius: 15px;
  text-align: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding-right: 30px;
}
#commandListButton:hover{
  background-color: #222;
  color: #AAA
}
#commandListButton h1{
  font-size: 24px;
  margin-top: 8px;
  margin-left: 2px;
}
#commandListButton:hover h1{
  color: #EEE;
}
.faq{
  color: lightgray;
  font-family: 'fot-chiaro_stdb';
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  margin-right: 30px;
  margin-bottom: -10px;
  width: 40px;
}
.warning{
  font-family: 'fot-chiaro_stdb';
  color: #AAA;
  font-size: 10px;
  bottom: 0px;
  left: 12px;
  position: fixed;
}
.rectangle {
    height: 120px;
    width: 420px;
    background-color: #555;
    display: inline-block;
    border-radius: 20px;
    margin: auto;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #222;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#usedfor{
  border-radius: 10px;
  background-color: #222;
  padding-left: 5px;
  padding-right: 5px;
}
#infowindow{
  color: white;
  border: none;
  background-color: #0A0A0A;
  font-family: 'fot-chiaro_stdb';
  font-size: 16px;
  border-radius: 5px;
  width: 50%;
  height: 75%;
  box-shadow: 3px 3px 5px black;
  border: 3px solid #FFF;
}
textarea{
  width: 480px;
  height: 150px;
  padding: 8px 8px 8px 8px;
  font-size: 12px;
  border: 1px solid #222;
  font-family: Monospace;
  border-radius: 10px;
  background-color: #333;
  color: #AAA;
  resize: none;
}
textarea:focus{
  outline: none;
  border: 1px solid gray;
  box-shadow: 5px 5px 15px black;
}
.red{
  color: red;
}
.ico{
  width: 64px;
  height: 64px;
  float:left;
  margin-top: 20px;
  margin-left: -35px;
  padding-right: 16px;
  padding-bottom: 40px;
}
.ico img{
  width: 64px;
  height: 64px;
}
#output {
  vertical-align: top;
  text-align: center;
  line-height: 28px;
  font-size: 20px;
  font-family: 'fot-chiaro_stdb', Arial;
  color: white;
  text-align: left;
  padding-top: 20px;
  padding-left: 50px;
  white-space: pre-wrap;
  word-spacing: 5px;
  padding-left: 64px;
  padding-right: 12px;
  padding-bottom: 8px;
  padding-top: 14px;
  margin-left: 48px;
  position: absolute;
  text-wrap: nowrap;
}
#arrow{
  margin-left:-24px;
}
.boxbreak{
  display: inline-block;
  overflow: visible;
  width: 400px;
  height: 90px;
  background-color: rgb(85 85 85 / 20%);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-top: 10px;
  padding-left: 52px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 18px;
  font-family: 'fot-chiaro_stdb', Arial;
  text-align: left;
  white-space: pre-wrap;
}
