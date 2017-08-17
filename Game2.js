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
  var sgb = document.getElementById("StartGameButton");
  document.body.style.fontFamily ='VT323';
  document.getElementById('Logo').setAttribute("style","visibility:hidden");
  document.getElementById('StartButton').setAttribute("style","visibility:hidden");
  ctx.beginPath();
  ctx.lineWidth="6";
  ctx.strokeStyle="#ffffff";
  ctx.rect(400,75,500,500);
  ctx.font = "lighter 80px VT323";
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Instructions",455,175);
  ctx.font = "lighter 40px VT323";
  ctx.fillText("You are at Gracey's Diner", 450,260);
  ctx.fillText("and you have $20 to spend.",445,310);
  ctx.fillText("Select 1 main course and 1",445, 360);
  ctx.fillText("drink from the menu.", 490,410);
  ctx.fillText("The sides are optional.",470,460);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth="6";
  ctx.strokeStyle="#ffffff";
  ctx.rect(550,480,200,70);
  ctx.fillText("START",610,525);
  ctx.drawImage(sgb,550,400);
  ctx.stroke();
}
