
function playEating() {
 document.getElementById("eatingMusic").play();
}


window.onload = function playBackground() {
 document.getElementById("backgroundMusic").play();
}


order_price = []
user_order = []
img_src = []

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
  img_src.push("fries.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function side2() {
  user_order.push("salad");
  order_price.push(2.5);
  img_src.push("salad.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function side3() {
  user_order.push("nuggets");
  order_price.push(2.0);
  img_src.push("nuggets.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function side4() {
  user_order.push("soup");
  order_price.push(3.0);
  img_src.push("soup.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function side5() {
  user_order.push("cheesecake");
  order_price.push(2.5);
  img_src.push("cheesecake.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function side6() {
  user_order.push("parfait");
  order_price.push(3.0);
  img_src.push("parfait.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}


var clicks1=0;
function showBorderFries(){
  clicks1+=1;
  if (clicks1%2==1){
  document.getElementById("friesbutton").style.borderColor = "#ff7733";
  document.getElementById("friesbutton").style.borderWidth ="4px";
  side1();
  budget();
  }
  else if (clicks1%2==0){
   document.getElementById("friesbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "fries") {
       user_order.splice(i, 1);
      }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 1.5) {
      order_price.splice(i, 1);
   }
 }
 for(var i=img_src.length-1; i>=0; i--){
   if(img_src[i]=="fries.png"){
     img_src.splice(i, 1);
   }
 }
 }
}
var clicks2=0;
function showBorderSalad(){
  clicks2+=1;
  if (clicks2 %2 ==1){
  document.getElementById("saladbutton").style.borderColor = "#ff7733";
  document.getElementById("saladbutton").style.borderWidth="4px";
  side2();
  budget();
  }
  else if (clicks2%2==0){
   document.getElementById("saladbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "salad") {
      user_order.splice(i, 1);
    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 2.5) {
      order_price.splice(i, 1);
   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="salad.png"){
      img_src.splice(i, 1);
    }
  }
 }
}

var clicks12=0;
function showBorderNuggets(){
  clicks12+=1;
  if (clicks12%2==1){
  document.getElementById("nuggetsbutton").style.borderColor = "#ff7733";
  document.getElementById("nuggetsbutton").style.borderWidth="4px";
  side3();
  budget();
  }
  else if (clicks12%2==0){
   document.getElementById("nuggetsbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "nuggets") {
       user_order.splice(i, 1);

    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 2.0) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="nuggets.png"){
      img_src.splice(i, 1);
    }
  }
 }
}

var clicks3=0;
function showBorderSoup(){
  clicks3+=1;
  if (clicks3%2==1){
  document.getElementById("soupbutton").style.borderColor = "#ff7733";
  document.getElementById("soupbutton").style.borderWidth="4px";
  side4();
  budget();
  }
  else if (clicks3%2==0){
   document.getElementById("soupbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "soup") {
       user_order.splice(i, 1);
    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 3.0) {
      order_price.splice(i, 1);
   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="soup.png"){
      img_src.splice(i, 1);
    }
  }
}
}

var clicks4=0;
function showBorderCheesecake(){
  clicks4+=1;
  if (clicks4%2==1){
  document.getElementById("cheesecakebutton").style.borderColor = "#ff7733";
  document.getElementById("cheesecakebutton").style.borderWidth="4px";
  side5();
  budget();
  }
  else if (clicks4%2==0){
   document.getElementById("cheesecakebutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "cheesecake") {
       user_order.splice(i, 1);

    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 2.5) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="cheesecake.png"){
      img_src.splice(i, 1);
    }
  }
}
}

var clicks5=0;
function showBorderParfait(){
  clicks5+=1;
  if (clicks5%2==1){
  document.getElementById("parfaitbutton").style.borderColor = "#ff7733";
  document.getElementById("parfaitbutton").style.borderWidth="4px";
  side6();
  budget();
  }
  else if (clicks5%2==0){
   document.getElementById("parfaitbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "parfait") {
      user_order.splice(i, 1);
    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 3.0) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="parait.png"){
      img_src.splice(i, 1);
    }
  }
 }
}



function main1() {
  user_order.push("burger");/*comment*/
  order_price.push(3.5);
  img_src.push("burger.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function main2() {
  user_order.push("spaghetti");
  order_price.push(5.0);
  img_src.push("spaghetti.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function main3() {
  user_order.push("pizza");
  order_price.push(2.50);
  img_src.push("pizza.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);

}

var clicks6=0;
function showBorderBurger(){
  clicks6+=1;
  if (clicks6%2==1){
  document.getElementById("burgerbutton").style.borderColor = "#ff7733";
  document.getElementById("burgerbutton").style.borderWidth="4px";
  main1();
  budget();
  }
  else if (clicks6%2==0){
   document.getElementById("burgerbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "burger") {
      user_order.splice(i, 1);
    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 3.5) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="burger.png"){
      img_src.splice(i, 1);
    }
  }
 }
}

var clicks7=0;
function showBorderSpaghetti(){
  clicks7+=1;
  if (clicks7%2==1){
  document.getElementById("spaghettibutton").style.borderColor = "#ff7733";
  document.getElementById("spaghettibutton").style.borderWidth="4px";
  main2();
  budget();
  }
  else if (clicks7%2==0){
   document.getElementById("spaghettibutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "spaghetti") {
      user_order.splice(i, 1);

    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 5.0) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="spaghetti.png"){
      img_src.splice(i, 1);
    }
  }
}
}

var clicks8=0;
function showBorderPizza(){
  clicks8+=1;
  if (clicks8%2==1){
  document.getElementById("pizzabutton").style.borderColor = "#ff7733";
  document.getElementById("pizzabutton").style.borderWidth="4px";
  main3();
  budget();
  }
  else if (clicks8%2==0){
   document.getElementById("pizzabutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "pizza") {
      user_order.splice(i, 1);

    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 2.50) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="pizza.png"){
      img_src.splice(i, 1);
    }
  }
 }
}


function drink1() {
  user_order.push("orange juice");
  order_price.push(1.5);
  img_src.push("juice.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function drink2() {
  user_order.push("soda");
  order_price.push(1.0);
  img_src.push("soda.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

function drink3() {
  user_order.push("coffee");
  order_price.push(2.0);
  img_src.push("coffee.png");
  console.log(user_order);
  console.log(order_price);
  console.log(img_src);
}

var clicks9=0;
function showBorderOJ(){
  clicks9+=1;
  if (clicks9%2==1){
  document.getElementById("ojbutton").style.borderColor = "#ff7733";
  document.getElementById("ojbutton").style.borderWidth="4px";
  drink1();
  budget();
  }
  else if (clicks9%2==0){
   document.getElementById("ojbutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "orange juice") {
      user_order.splice(i, 1);
    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 1.5) {
      order_price.splice(i, 1);
   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="juice.png"){
      img_src.splice(i, 1);
    }
  }
}
}

var clicks10=0;
function showBorderSoda(){
  clicks10+=1;
  if (clicks10%2==1){
  document.getElementById("sodabutton").style.borderColor = "#ff7733";
  document.getElementById("sodabutton").style.borderWidth="4px";
  drink2();
  budget();
  }
  else if (clicks10%2==0){
   document.getElementById("sodabutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "soda") {
      user_order.splice(i, 1);

    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 1.0) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="soda.png"){
      img_src.splice(i, 1);
    }
  }
}
}

var clicks11=0;
function showBorderCoffee(){
  clicks11+=1;
  if (clicks11%2==1){
  document.getElementById("coffeebutton").style.borderColor = "#ff7733";
  document.getElementById("coffeebutton").style.borderWidth="4px";
  drink3();
  budget();
  filter();
  }
  else if (clicks11%2==0){
   document.getElementById("coffeebutton").style.borderColor="#FFFAC4";
   for(var i = user_order.length - 1; i >= 0; i--) {
    if(user_order[i] == "coffee") {
       user_order.splice(i, 1);

    }
  }
  for(var i = order_price.length - 1; i >= 0; i--) {
   if(order_price[i] == 2.0) {
      order_price.splice(i, 1);

   }
  }
  for(var i=img_src.length-1; i>=0; i--){
    if(img_src[i]=="coffee.png"){
      img_src.splice(i, 1);
    }
  }
}
}

function order(){

    if (user_order.length == 0) {
      alert("You must eat something! Why did you come here if you weren't going to order?");


      }
    else if (user_order.length<2){
      alert("You must choose at least 2 items from the menu! Choose again.");

    }
    else {
      var answer = confirm ("You ordered " + user_order +". Ready to play?");
      if (answer){
      // location.hash="#game";
       gameStarton();
       if(window.onclick){
      document.getElementById("game").scrollIntoView(); 
       }
    }
  }
}





// function filter()
// {
// var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
//
// var longWords = words.filter(function(word){
//   return word.length > 6;
//   console.log(longWords);
// });
// }

//
// function getPic(){
//   var imgs = ['https://static.tumblr.com/rluyfrr/5J4mc976u/tumblr_lrcqhlp3ct1qjd5ryo1_500_large.jpg',
//               'https://i.pinimg.com/originals/b0/a5/f3/b0a5f3a2de67b531143d40bf13d8835d.jpg',
//               'https://static.tumblr.com/rluyfrr/5J4mc976u/tumblr_lrcqhlp3ct1qjd5ryo1_500_large.jpg',
//               'https://i.pinimg.com/originals/b0/a5/f3/b0a5f3a2de67b531143d40bf13d8835d.jpg'];
//   var container = document.getElementById('imagecontainer');
//   var docFrag = document.createDocumentFragment();
//
//   imgs.forEach(function(url) {
//       var img = document.createElement('img');
//       img.src = url;
//       docFrag.appendChild(img);
// });
//
//   container.appendChild(docFrag);
// }

// var img_src=["juice.png", "coffee.png", "nuggets.png", "fries.png", "cheesecake.png"];

function move() {
  changeimg(0);
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 500);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      go = true;
      if (go == true) {
      gameOveron();
    }
      //image code
    } else {
      go = false;
      width=width+2;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function gameOveron() {
    document.getElementById("overlay").style.display = "block";
}

function gameStarton(){
  document.getElementById("overlay2").style.display = "block";
}

function gameStartoff(){
  document.getElementById("overlay2").style.display = "none";
}

function checkstart() {
  if (user_order.length == 0) {
    alert("You haven't ordered anything...");
  } else {
    var hide = document.getElementById('startButton');
    hide.style.visibility = "hidden"
    move()
  }
}

var counter = 0;
function clicking(){
  counter +=1;
  document.getElementById("clicks").innerHTML = counter;

  var checkpt=60;
  for (var i=0; i<img_src.length; i++){
  if (counter > checkpt) {
    changeimg(i+1);
    checkpt+=60;

  }
}
}

function changeimg(i){
var container = document.getElementById("food");
// container.innerHTML = "<img src='"+img_src[i]+"' alt='my image'>";
container.innerHTML = "<img src='"+img_src[i]+"' alt='my image' class='foodOrder'>";
}
