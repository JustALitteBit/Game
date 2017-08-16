user_order = []
order_price = []

function main1() {
  user_order.push("burger");
  order_price.push(1.50);
}

function main2() {
  user_order.push("spaghetti");
  order_price.push(4.20);
}

function main3() {
  user_order.push("pizza");
}

function drink1() {
  user_order.push("orange juice");
}

function drink2() {
  user_order.push("soda");
}

function drink3() {
  user_order.push("coffee");
}

function side1() {
  user_order.push("fries");
  order_price.push(100);
}

function side2() {
  user_order.push("salad");
}

function side3() {
  user_order.push("chicken nuggets");
}

function side4() {
  user_order.push("soup");
}

function side5() {
  user_order.push("pie");
}

function side6() {
  user_order.push("parfait");
}

// budget: values of all items // adding values // conditional

function budget() {
  for (var i = 0; i<order_price.length; i++) {
    spent += user_order[i] {
      if spent > 25) {
      alert("You exceeded your budget of $25. Please change your order.")
      }
    }
  }
}

function checkorder() {
  alert("Your order is" + user_list);
}
