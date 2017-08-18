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

//user_order = [image1, image2, image3]

// var counter = 0;
// function clicking(){
//   counter +=1;
//   document.getElementById("clicks").innerHTML = counter;
// }

// function changingFood() {
//     clicking()
//     counter % 30 == 0 {
//     for (i = 0, i < user_order.length, i++) {
//       if (source[i].id === id) {
//         return source[i];
//     }
//   }
// }

//function: if this item is in list, show it
//function: run through items in list, order of visibility --- code???
//connect all code
