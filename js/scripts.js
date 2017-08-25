// Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}


// Interface Logic
$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var toppings = [];
    var size = $("select#question1").val();
    $("input:checkbox[name=topping]:checked").each(function() {
      toppings.push($(this).val());
    });
    var orderedPizza = new Pizza(size, toppings);
    console.log(orderedPizza);
  });
});
