var randomtass ;

function btnOpenClick()
{
   var randomTass=Math.floor(Math.random()*6)+1;
   var tassInput=document.getElementById("inputid");
   tassInput.setAttribute('value', randomTass );
   console.log(tassInput);
   
}
function inputname()
{
   function setInputData(inputId){
      var player = prompt("Please enter your name:" );
      var playername=document.getElementById(inputId);
      playername.setAttribute('value',player);
   }

   setInputData("playerid");


   var player = prompt("Please enter your name:" );
   var playername=document.getElementById("player2id");
   playername.setAttribute('value',player);
}
function row()
{
   
}
