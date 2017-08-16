user_order = []
order_price = []

function budget() {
  var spent=0;
  for (var i = 0; i<order_price.length; i++) {
    spent += order_price[i];
      if (spent > 25) {
      alert("You exceeded your budget of $25. Please change your order.")
      }
  }
}


function side1() {
  user_order.push("fries");
  order_price.push(100);
  console.log(user_order)
}

function showBorder(){
  document.getElementById("friesbutton").style.borderColor = "red";
  side1();
  budget();
}



function main1() {
  user_order.push("burger");
  order_price.push(1.50);
  console.log(user_order)

}

function main2() {
  user_order.push("spaghetti");
  order_price.push(4.20);
  console.log(user_order)

}

function main3() {
  user_order.push("pizza");
  console.log(user_order)

}

function drink1() {
  user_order.push("orange juice");
  console.log(user_order)

}

function drink2() {
  user_order.push("soda");
  console.log(user_order)

}

function drink3() {
  user_order.push("coffee");
  console.log(user_order)

}



function side2() {
  user_order.push("salad");
  console.log(user_order)

}

function side3() {
  user_order.push("chicken nuggets");
  console.log(user_order)

}

function side4() {
  user_order.push("soup");
  console.log(user_order)

}

function side5() {
  user_order.push("pie");
  console.log(user_order)

}

function side6() {
  user_order.push("parfait");
  console.log(user_order)

}

// budget: values of all items // adding values // conditional
