main_order = []
side_order = []
order_price = []
user_order = []

// make sure to allow to the user to adjust the amt of side dishes they want with up and down arrows
function budget() {
  var spent=0;
  for (var i = 0; i<order_price.length; i++) {
    spent += order_price[i];
      if (spent > 25) {
      alert("You spent $" + spent + ". You exceeded your budget of $25. Please change your order.")
      }
  }
}


function side1() {
  side_order.push("fries");
  order_price.push(2.00);
  console.log(user_order);
}

function side2() {
  side_order.push("salad");
  order_price.push(3.50);
  console.log(user_order);

}

function side3() {
  side_order.push("chicken nuggets");
  order_price.push(3.75);
  console.log(user_order);

}

function side4() {
  side_order.push("soup");
  order_price.push(4.60);
  console.log(user_order);

}

function side5() {
  side_order.push("pie");
  order_price.push(3.80);
  console.log(user_order);

}

function side6() {
  side_order.push("parfait");
  order_price.push(4.00);
  console.log(user_order);

}

// var clicks=0;
//
// function counterfries(){
//   clicks+=1;
//   document.getElementById("fries").innerHTML=clicks;
//   console.log(clicks);
// }
//
// var clicks1=0;
//
// function counternuggets(){
//   clicks1+=1;
//   document.getElementById("nuggets").innerHTML=clicks1;
//   console.log(clicks1);
// }
//
// var clicks2=0;
//
// function countersalad(){
//   clicks2+=1;
//   document.getElementById("salad").innerHTML=clicks2;
//   console.log(clicks2);
// }

function showBorderFries(){
  document.getElementById("friesbutton").style.borderColor = "#ff7733";
  side1();
  budget();
  // counterfries();
}

function showBorderSalad(){
  document.getElementById("saladbutton").style.borderColor = "#ff7733";
  side2();
  budget();
  // countersalad();
}

function showBorderNuggets(){
  document.getElementById("nuggetsbutton").style.borderColor = "#ff7733";
  side3();
  budget();
  // counternuggets();

}

function showBorderSoup(){
  document.getElementById("soupbutton").style.borderColor = "#ff7733";
  side4();
  budget();
  // counter();

}

function showBorderPie(){
  document.getElementById("piebutton").style.borderColor = "#ff7733";
  side5();
  budget();
  // counter();

}

function showBorderParfait(){
  document.getElementById("parfaitbutton").style.borderColor = "#ff7733";
  side6();
  budget();
  // counter();

}

// change name of this function and id name according to side dish


function main1() {
  main_order.push("burger");
  order_price.push(1.50);
  console.log(user_order);

}

function main2() {
  main_order.push("spaghetti");
  order_price.push(4.20);
  console.log(user_order);

}

function main3() {
  main_order.push("pizza");
  order_price.push(3.50);
  console.log(user_order);

}

function showBorderBurger(){
  document.getElementById("burgerbutton").style.borderColor = "#ff7733";
  main1();
  budget();
}

function showBorderSpaghetti(){
  document.getElementById("spaghettibutton").style.borderColor = "#ff7733";
  main2();
  budget();
}

function showBorderPizza(){
  document.getElementById("pizzabutton").style.borderColor = "#ff7733";
  main3();
  budget();
}


function drink1() {
  main_order.push("orange juice");
  order_price.push(1.75);
  console.log(user_order);
}

function drink2() {
  main_order.push("soda");
  order_price.push(1.20);
  console.log(user_order);
}

function drink3() {
  main_order.push("coffee");
  order_price.push(2.80);
  console.log(user_order);
}


function showBorderOJ(){
  document.getElementById("ojbutton").style.borderColor = "#ff7733";
  drink1();
  budget();
}

function showBorderSoda(){
  document.getElementById("sodabutton").style.borderColor = "#ff7733";
  drink2();
  budget();
}

function showBorderCoffee(){
  document.getElementById("coffeebutton").style.borderColor = "#ff7733";
  drink3();
  budget();
}

function order(){
  alert("You ordered" + main_order + side_order);
}
