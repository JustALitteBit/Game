var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var GT = document.images["GT"];


function Slide1(){
  ctx.drawImage(GT,400,75);
  document.getElementById('GT2').setAttribute("style","visibility:hidden");
}
