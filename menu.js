user_order = []
order_price = []

// make sure to allow to the user to adjust the amt of side dishes they want with up and down arrows
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
  order_price.push(2);
  console.log(user_order)
}

function side2() {
  user_order.push("salad");
  // change price
  order_price.push(2);
  console.log(user_order)

}

function side3() {
  user_order.push("chicken nuggets");
  order_price.push(2);
  console.log(user_order)

}

function side4() {
  user_order.push("soup");
  order_price.push(2);
  console.log(user_order)

}

function side5() {
  user_order.push("pie");
  order_price.push(2);
  console.log(user_order)

}

function side6() {
  user_order.push("parfait");
  order_price.push(2);
  console.log(user_order)

}

var clicks=0;

function counterfries(){
  clicks+=1;
  document.getElementById("counterfries").innerHTML=clicks;
  console.log(clicks);
}

var clicks1=0;

function counternuggets(){
  clicks1+=1;
  document.getElementById("counternuggets").innerHTML=clicks1;
  console.log(clicks1);
}

var clicks2=0;

function countersalad(){
  clicks2+=1;
  document.getElementById("countersalad").innerHTML=clicks2;
  console.log(clicks2);
}

function showBorderFries(){
  document.getElementById("friesbutton").style.borderColor = "#ff7733";
  side1();
  budget();
  counterfries();
}

function showBorderSalad(){
  document.getElementById("saladbutton").style.borderColor = "#ff7733";
  side2();
  budget();
  countersalad();

}

function showBorderNuggets(){
  document.getElementById("nuggetsbutton").style.borderColor = "#ff7733";
  side3();
  budget();
  counternuggets();

}

function showBorderSoup(){
  document.getElementById("soupbutton").style.borderColor = "#ff7733";
  side4();
  budget();
  counter();

}

function showBorderPie(){
  document.getElementById("piebutton").style.borderColor = "#ff7733";
  side1();
  budget();
  counter();

}

function showBorderParfait(){
  document.getElementById("parfaitbutton").style.borderColor = "#ff7733";
  side6();
  budget();
  counter();

}

// change name of this function and id name according to side dish






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




// budget: values of all items // adding values // conditional
