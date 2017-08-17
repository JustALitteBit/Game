var x = 0;
var time = 20;

while (time > 0) {
  delay(1000);
  x+=50;
  time = time - 1;
}

function timer() {
  var c = document.getElementById("gameCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.rect(75,20,1000,75);
  ctx.stroke();
  ctx.fillRect(75,20,x,75);
  ctx.stroke();
}


// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// </head>
// <body onload="timer()">
//   <canvas id="gameCanvas" width="1300" height="640">
//   </canvas>
//   <script type="text/javascript" src="timer.js"></script>
// </body>
// </html>
