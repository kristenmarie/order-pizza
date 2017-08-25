// Business Logic
function Pizza(size) {
  this.size = size;
}


// Interface Logic
$(document).ready(function(){
  $("form#pizza_order").submit(function(event){
    event.preventDefault();
    var size = $("select#question1").val();
    var orderedPizza = new Pizza(size);
    console.log(orderedPizza);
  });
});
