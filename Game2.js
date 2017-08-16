function Intro(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("Logo");
  ctx.drawImage(Logo,canvas.width/4,canvas.height/2);
  var StartButton = document.images["StartButton"];
  ctx.drawImage(StartButton,500,100);
}

function changeImage()
{
  document.images["StartButton"].src= "StartButton.png";
  return true;
}
function changeImageBack()
{
  document.images["StartButton"].src = "StartButton.png";
  return true;
}
function handleMDown()
{
  document.images["StartButton"].src = "StartButton.png";
  return true;
}
function handleMUp()
{
  changeImage();
  return true;
}
