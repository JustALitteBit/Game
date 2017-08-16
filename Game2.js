var state = 1;

function Intro(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("Logo");
  ctx.drawImage(Logo,canvas.width/4,canvas.height/2);
  var StartButton = document.images["StartButton"];
  ctx.drawImage(StartButton,500,100);
}


function changeImage(){
  document.images["StartButton"].src= "StartButton.png";
  return true;
}
function changeImageBack(){
  document.images["StartButton"].src = "StartButton.png";
  return true;
}
function handleMDown(){
  document.images["StartButton"].src = "StartButton.png";
  return true;
}
function handleMUp(){
  changeImage();
  return true;
}
function GameIntro(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  document.getElementById('Logo').setAttribute("style","visibility:hidden");
  document.getElementById('StartButton').setAttribute("style","visibility:hidden");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(20,20,150,100);
  ctx.stroke();
}
