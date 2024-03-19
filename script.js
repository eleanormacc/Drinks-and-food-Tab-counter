$(document).ready(function (){

    var items = [];
//All Buttons
    $("#item-form").on("submit, addItemToCart");
    $("#cart-table").on("click", ".btn-danger", removeItemFromCart);
    $("#generate-invoice").on("click, generateInvoice");

//Action in relation to adding items to cart 
    function addItemToCart(event){
        event.preventDefault();

        //Step 1. Declare variables
        var itemName = $("#item-name").val();
        var itemPrice = $("#item-price").val();

        //Step 2. Function 
        if(itemName !== "" && itemPrice !== ""){
            var item = {
                name: itemName,
                price: parseFloat(itemPrice),
            };

            //action to add item to the cart 
            items.push(item);
            $("#cart-table tbody").append(
                "<tr><td>" + 
                item.name + 
                "</td><td>$" + 
                item.price.toFixed(2) + 
                '</td><td><button class="btn btn-sm btn-danger"><i class="fa fa-trash-alt"></i></button></td></tr>'
            );
            
            //Total cost of items changes when buttons is pressed and request is submitted
            updateTotalCost();
            $("#item-name").val("");
            $("#item-price").val("");
        }
    }

//Action in relation to removing items to cart 
    function removeItemFromCart() {
        var index = $(this).closest("tr").index();
        items.slice(index, 1);
        $(this).closest("tr").remove();
        updateTotalCost();
    }

    function updateTotalCost() {
        var totalCost = 0;
        item.forEach(function (item){totalCost += item.price;});
        $("total-cost").text("Total Cost: £" + totalCost.
        toFixed
        (2));
    }

// Generating an Invoice 
    function generateInvoice(){
      var invoice = `<html>
      <head>
          <title>Invoice</title>
      </head>
      <body>
         <div class="container mt-5">
          <h1 class="text-center">Invoice</h1>
          <table class="table">
              <thead>
                  <tr>
                      <th>Item Name</th>
                      <th>Item Price</th>
                      <th>Quantity</th>
                  </tr>
              </thead>
              <tbody>`;
            
        items.forEach(function (item){
        invoice += "<tr><td>" + item.name +"</td><td>$" +
        item.price.toFixed(2)+"</td></tr>";
        });

        invoice += '</tbody></table><p class="text-right">Total Cost: £' + 
        getTotalCost()+ 
        "</p><div><body></html>";
        
        //creation of pop up to new window when invoice is generated 
        var popup = window.open("", "_blank");
        popup.document.open();
        popup.document.write(invoice);
        popup.document.close();
    }

    function getTotalCost(){
        var totalCost = 0;
        items.forEach(function (item){
           totalCost += item.price;
        })
        return totalCost.toFixed(2);
    }
});