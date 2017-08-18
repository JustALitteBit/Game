var counter = 0;
function clicking(){
  counter +=1;
  document.getElementById("clicks").innerHTML = counter;
  if (counter == 20) {
    document.getElementById("food").style.display = "none";
  }
}
