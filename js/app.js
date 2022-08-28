var randomTass;
var dataBoxNumber;
var newplayerlocation;
var pleyer1place = 0;

//function randomTassFn() {
// randomTass = Math.floor(Math.random() * 6) + 1;
// return randomTass;
//}
//unction tassInput() {
// var tassInput = document.getElementById("inputid");
//return tassInput;
//}

//function setTassInputValue(tassInput,randomTass){

//tassInput().setAttribute("value", randomTassFn());
//}
function tass() {
  randomTass = Math.floor(Math.random() * 6) + 1;
  return randomTass;
}

function setInputTassValue(value) {
  var inputTass = document.getElementById("inputid");
  inputTass.setAttribute("value", value);
}

function x() {
  var tt = tass();
  setInputTassValue(tt);

  setTimeout(function(){movement() }, 1000);
}

function testFn() {
  var tt = setInputTassValue("5");
  //  alert(tt);
}

function returnMohreP1Placement() {
  var PN = null; //PN=Placement number
  var player = document.getElementById("mohrep1");
  PN = player.closest('.box');
  placeP1 = PN.getAttribute("data-box-number");
  return parseInt(placeP1);
}

function clearRandomTass() {
  setInputTassValue("");
}


function movement(event) {
  var databoxNumber = returnMohreP1Placement() + parseInt(randomTass);
  var player = document.getElementById("mohrep1");
  var mybox = document.querySelector("div.box[data-box-number='" + parseInt(databoxNumber) + "'] .p1id");


  if (mybox < 20) {

    alert("next player");
  }
  else {
    mybox.appendChild(player);
  }

  
}

  function returnMohreP2Placement(){
    var PN2=null; //PN2=Placement number
    var player = document.getElementById("mohrep2");
    PN2=player.closest('.box');
    placeP2=PN2.getAttribute("data-box-number");
    return parseInt(placeP2);
  }


function movementP2(){
  var databoxNumber =  returnMohreP2Placement() + parseInt(randomTass);
  var player = document.getElementById("mohrep2");
  var mybox = document.querySelector("div.box[data-box-number='" + parseInt(databoxNumber) + "'] .p2id");
  if (mybox<20){
    alert("next player");
  }
  else{
    mybox.appendChild(player);
  }

  setTimeout(function () { clearRandomTass() }, 1000);

}


