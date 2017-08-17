function intro(){
  var c = document.getElementById("gameCanvas");
  var context = c.getContext("2d");
  var eat_img = document.getElementById("eatButton");
  context.drawImage(eat_img, 100, 100);
  var food_img = document.getElementById("food");
  context.drawImage(food_img, 300, 300);
}



function clicks(){
  var clicks = 0;
  clicks += 1;
  }

function counter(){
  document.getElementById("eatButton").innerHTML = clicks()
}



 //click button -- if clicks = x, hide food -- "done"
