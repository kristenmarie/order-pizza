// Business Logic
function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

function Customer(firstName, lastName, street, city, zip) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.zip = zip;
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
  $("input#delivery").click(function(){
    $("#delivery-address").show();
  })
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var toppings = [];
    var size = $("select#size").val();
    var cost = 0.00;
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var zip = $("input#zip").val();
    var orderType = $('input[name=orderType]:checked').val();
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
    if(orderType ==="delivery") {
      var customer = new Customer(firstName, lastName, street, city, zip);
      $("#customer-address").append("<h3>Hot pizza is coming at ya!</h3><br><h4>"
      + customer.firstName + " " + customer.lastName + "<br>" + customer.street +
      "<br>" + customer.city + " " + customer.zip);
    }
  });
});
