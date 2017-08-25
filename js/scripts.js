// Business Logic
function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.total = function(size, toppings) {
  if(this.size === "Small") {
    this.cost += 12.99;
  } else if(this.size === "Medium") {
    this.cost += 16.99;
  } else if(this.size === "Large") {
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
    orderedPizza.total();
    $("#order-confirmation").append("<h3>$" + orderedPizza.cost.toFixed(2) +
      "</h3><br><h4>Selected size:</h4> <p>"  +  orderedPizza.size +
      "</p><br><h4>Selected toppings:</h4> <p>" + orderedPizza.toppings +
      '</p><br><h2>Enjoy!</h2><br><img src="img/pizza2.webp">');
    $("#order-confirmation").show();
    $(".form-container").hide();
  });
});
