var randomTass;
var dataBoxNumber;
var newplayerlocation;
var pleyer1place = 0;

function randomTassFn() {
  randomTass = Math.floor(Math.random() * 6) + 1;
  var tassInput = document.getElementById("inputid");
  tassInput.setAttribute("value", randomTass);
}

// function inputname() {
//   function setInputData(inputId) {
//     var player = prompt("Please enter your name:");
//     var playername = document.getElementById(inputId);
//     playername.setAttribute("value", player);
//   }

//   setInputData("playerid");

//   var player = prompt("Please enter your name:");
//   var playername = document.getElementById("player2id");
//   playername.setAttribute("value", player);
// }
function testFn(){
 var tt= returnMohreP1Placement();
 alert(tt);
}

function returnMohreP1Placement(){
  var PN=null; //PN=Placement number
  var player = document.getElementById("mohrep1");
  PN=player.closest('.box');
  placeP1=PN.getAttribute("data-box-number");

  return parseInt(placeP1);
}

function movement(event) {
  var databoxNumber =  returnMohreP1Placement() + parseInt(randomTass);
  var player = document.getElementById("mohrep1");
  var mybox = document.querySelector("div.box[data-box-number='" + parseInt(databoxNumber) + "'] .p1id");
  mybox.appendChild(player);
}

