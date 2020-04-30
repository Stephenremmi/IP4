$("#order").click(function(){
  
  var medium = document.getElementById("medium");
  var large = document.getElementById("large");
  var crispy = document.getElementById("crispy");
  var stuffed = document.getElementById("stuffed");
  var glutenFree = document.getElementById("glutenFree");
  var pepperoni = document.getElementById("pepperoni");
  var onions = document.getElementById("onions");
  var bacon = document.getElementById("bacon");
  var extraCheese = document.getElementById("extraCheese");
  var pineApple = document.getElementById("pineapple");
  var numberOfPizzas = document.getElementById("number");
  var mpesa = document.getElementById("mce-MMERGE5-0");
  var bank = document.getElementById("mce-MMERGE5-1");
  var paypal = document.getElementById("mce-MMERGE5-2");
  
  
  if(small.checked == false && medium.checked ==false && large.checked ==false){
    alert("check pizza size")
  }
  else if(mpesa.checked == false && bank.checked == false && paypal.checked ==false){
    alert("Amount not recieved")
  }
  else if(
   prompt("Enter location")){
    alert("click the checkout button to view total amount")
   }

  else{
     swal({
       icon: "warning",
       text: "Enter location for delivery to be made",
       title:"PIZZARIA ORDERS",
       button:"Oops!!"
     })
    }
});
  
$("#checkout").click(function(){
  
  var small = document.getElementById("small");
  var medium = document.getElementById("medium");
  var large = document.getElementById("large");
  var crispy = document.getElementById("crispy");
  var stuffed = document.getElementById("stuffed");
  var glutenFree = document.getElementById("glutenFree");
  var pepperoni = document.getElementById("pepperoni");
  var onions = document.getElementById("onions");
  var bacon = document.getElementById("bacon");
  var extraCheese = document.getElementById("extraCheese");
  var pineApple = document.getElementById("pineapple");
  var numberOfPizzas = document.getElementById("number");
  var mpesa = document.getElementById("mce-MMERGE5-0");
  var bank = document.getElementById("mce-MMERGE5-1");
  var paypal = document.getElementById("mce-MMERGE5-2");
  
  
  if(small.checked == false && medium.checked ==false && large.checked ==false){
    alert("check pizza size")
  }
  else if(mpesa.checked == false && bank.checked == false && paypal.checked ==false){
    alert("Amount not recieved")
  }
  else{
    swal({
      icon: "success",
      text: "Total cost of delivery is 1500/=",
      title:"PIZZARIA ORDERS"
    })
  }
});
  

  

  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  // Get the button that opens the modal
  var mpesa = document.getElementById("mce-MMERGE5-0");
  var bank = document.getElementById("mce-MMERGE5-1");
  var paypal = document.getElementById("mce-MMERGE5-2");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  mpesa.onclick = function() {
    modal2.style.display = "block";
  }
  bank.onclick = function() {
    modal3.style.display = "block";
  }
  paypal.onclick = function() {
    modal1.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
    }
  