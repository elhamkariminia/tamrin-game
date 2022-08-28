var randomTass;
var dataBoxNumber;
var newplayerlocation;
var pleyer1place = 0;

function tass() {
  randomTass = Math.floor(Math.random() * 6) + 1;
  return randomTass;
}

function setInputTassValue(value) {
  var inputTass = document.getElementById("inputid");
  inputTass.setAttribute("value", value);
}

function testFn() {
  var tt = setInputTassValue("5");
  //  alert(tt);
}

function clearRandomTass() {
  setInputTassValue("");
}


function place(mohreName) {
  var player = document.getElementById(mohreName);
  var PN = player.closest('.box');
  var playerPlace = PN.getAttribute("data-box-number");
  return parseInt(playerPlace);
}

function movement(mohreName,placeClass) {
  var tassvalue = tass();
  setInputTassValue(tassvalue);
  var databoxNumber = place(mohreName) + tassvalue;
  var player = document.getElementById(mohreName);
  var mybox = document.querySelector("div.box[data-box-number='" + parseInt(databoxNumber) + "'] " + placeClass );

  if (mybox < 20) {
    alert("next player");
  }
  else {
    mybox.appendChild(player);
  }

  setTimeout(function () { clearRandomTass() }, 2000);
}