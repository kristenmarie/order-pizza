// Business Logic
function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.total = function(size, toppings) {
  if(this.size === "small") {
    this.cost += 12.99;
  } else if(this.size === "medium") {
    this.cost += 16.99;
  } else if(this.size === "large") {
    this.cost += 19.99;
  }
  for(i = 0; i < this.toppings.length; i++) {
    this.cost += 2.50;
  }
}


// Interface Logic
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var toppings = [];
    var size = $("select#size").val();
    var cost = 0.00;
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });
    var orderedPizza = new Pizza(size, toppings, cost);
    console.log(orderedPizza);
    orderedPizza.total();
    console.log(orderedPizza.cost.toFixed(2));
  });
});
