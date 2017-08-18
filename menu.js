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
  user_order.push("fries");
  order_price.push(1.5);
  console.log(user_order);
}

function side2() {
  user_order.push("salad");
  order_price.push(2.5);
  console.log(user_order);

}

function side3() {
  user_order.push("nuggets");
  order_price.push(2.0);
  console.log(user_order);

}

function side4() {
  user_order.push("soup");
  order_price.push(3.0);
  console.log(user_order);

}

function side5() {
  user_order.push("cheesecake");
  order_price.push(2.5);
  console.log(user_order);

}

function side6() {
  user_order.push("parfait");
  order_price.push(3.0);
  console.log(user_order);

}


var clicks=0;
function showBorderFries(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("friesbutton").style.borderColor = "#ff7733";
  document.getElementById("friesbutton").style.borderWidth ="4px";
  side1();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("friesbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "fries") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

 }
}
var clicks=0;
function showBorderSalad(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("saladbutton").style.borderColor = "#ff7733";
  document.getElementById("saladbutton").style.borderWidth="4px";
  side2();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("saladbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "salad") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

 }
}

var clicks=0;
function showBorderNuggets(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("nuggetsbutton").style.borderColor = "#ff7733";
  document.getElementById("nuggetsbutton").style.borderWidth="4px";
  side3();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("nuggetsbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "nuggets") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

 }
}

var clicks=0;
function showBorderSoup(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("soupbutton").style.borderColor = "#ff7733";
  document.getElementById("soupbutton").style.borderWidth="4px";
  side4();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("soupbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "soup") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

}
}

var clicks=0;
function showBorderCheesecake(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("cheesecakebutton").style.borderColor = "#ff7733";
  document.getElementById("cheesecakebutton").style.borderWidth="4px";
  side5();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("cheesecakebutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "cheesecake") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

}
}

var clicks=0;
function showBorderParfait(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("parfaitbutton").style.borderColor = "#ff7733";
  document.getElementById("parfaitbutton").style.borderWidth="4px";
  side6();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("parfaitbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "parfait") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

 }
}



function main1() {
  user_order.push("burger");/*comment*/
  order_price.push(3.5);
//   if (typeof(Storage) !== "undefined") {
//     localStorage.setItem("list",user_order);
//     document.getElementById("result").innerHTML = localStorage.getItem("list");
//   }
//   sessionStorage.getItem(user_order);
//   sessionStorage.setItem('list', user_order);

}

function main2() {
  user_order.push("spaghetti");
  order_price.push(5.0);
  console.log(user_order);

}

function main3() {
  user_order.push("pizza");
  order_price.push(2.5);
  console.log(user_order);

}

var clicks=0;
function showBorderBurger(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("burgerbutton").style.borderColor = "#ff7733";
  document.getElementById("burgerbutton").style.borderWidth="4px";
  main1();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("burgerbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "burger") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

 }
}

var clicks=0;
function showBorderSpaghetti(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("spaghettibutton").style.borderColor = "#ff7733";
  document.getElementById("spaghettibutton").style.borderWidth="4px";
  main2();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("spaghettibutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "spaghetti") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

}
}

var clicks=0;
function showBorderPizza(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("pizzabutton").style.borderColor = "#ff7733";
  document.getElementById("pizzabutton").style.borderWidth="4px";
  main3();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("pizzabutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "pizza") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

 }
}


function drink1() {
  user_order.push("orange juice");
  order_price.push(1.5);
  console.log(user_order);
}

function drink2() {
  user_order.push("soda");
  order_price.push(1.0);
  console.log(user_order);
}

function drink3() {
  user_order.push("coffee");
  order_price.push(2.0);
  console.log(user_order);
}

var clicks=0;
function showBorderOJ(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("ojbutton").style.borderColor = "#ff7733";
  document.getElementById("ojbutton").style.borderWidth="4px";
  drink1();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("ojbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "orange juice") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

}
}

var clicks=0;
function showBorderSoda(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("sodabutton").style.borderColor = "#ff7733";
  document.getElementById("sodabutton").style.borderWidth="4px";
  drink2();
  budget();
  }
  else if (clicks%2==0){
   document.getElementById("sodabutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "soda") {
       user_order.splice(i, 1);
       delete user_order[i];
    }
  }

}
}

var clicks=0;
function showBorderCoffee(){
  clicks+=1;
  if (clicks%2==1){
  document.getElementById("coffeebutton").style.borderColor = "#ff7733";
  document.getElementById("coffeebutton").style.borderWidth="4px";
  drink3();
  budget();
  var coffee= coffee.png
  }
  else if (clicks%2==0){
   document.getElementById("coffeebutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "coffee") {
       user_order.splice(i, 1);
       delete user_order[i];

    }
  }

}
}

function order(){
    if (user_order.length == 0) {
      alert("You must eat something! Why did you come here if you weren't going to order?");
    }
    else {
      var answer = confirm ("You ordered " + user_order +". Ready to play?");
      if (answer) {
        window.location.href='https://justalittebit.github.io/Game/Slide5.html';
    }
  }
}
