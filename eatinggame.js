var counter = 0;
function clicking(){
  counter +=1;
  document.getElementById("clicks").innerHTML = counter;
  if (counter == 20) {
    document.getElementById("food").style.display = "none";
  }
}

function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 200);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}
