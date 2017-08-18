var counter = 0;
function clicking(){
  counter +=1;
  document.getElementById("clicks").innerHTML = counter;
  if (counter == 5) {
    document.getElementById("food").style.display = "none";
  }
}
