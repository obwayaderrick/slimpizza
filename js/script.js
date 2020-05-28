class Getpizza {
    constructor(Pizza, Size, crust, Topping, Charges) {
        this.Pizza = Pizza;
        this.Size = Size;
        this.crust = crust;
        this.Topping = Topping;
        this.Charges = Charges;
    }
}


$(document).ready(function(){
  $("#Order").click(function(event){
   let pname = $("#name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
      break;
      case "mega":
         price = 1270;
         console.log(price); 
     break;
     case "large":
       price = 1050;
       console.log(price);
     break;
     case "medium":
       price = 830;
       console.log("The price is " + price);
     break;
     case "regular":
       price = 550;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 400;
      break;
      case "Soft":
        crust_price = 300;
      break;
      case "Deep":
        crust_price = 350;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*40;
    console.log("toppings value" + Topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("#Order").show();
      $("#order").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("#Order").hide();
      $("#order").fadein (2000);
    }

    Charges = price + crust_price + topping_value;
    console.log(Charges);
    

    $("#pizza").html($("#name option:selected").val());
    $("#size").html( $("#size option:selected").val());
    $("#crust").html($("#crust option:selected").val());
    $("#topping").html(ptopping.join(", "));
    $("#Charges").html(Charges);