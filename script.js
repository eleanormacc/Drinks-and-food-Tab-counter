let itemCounter = 0;

//Add Invoice Items
function addInvoiceItem(){
    itemCounter++;

    const newItemRow = `
    <tr id="itemRow${itemCounter}">
    <td><input type="text" class="form-control" placeholder="Enter Item Name" required></td>
    <td><input type="number" class="form-control itemPrice" placeholder="Enter Item Price" required></td>
    <td><input type="number" class="form-control quantity" placeholder="Enter Quantity" required></td>
    <td><input type="text" class="form-control totalItemPrice" disabled readonly></td>
    <td><button type="button class="btn btn-danger" onclick="removeInvoiceItem(${itemCounter})">Remove</button></td>
    `;

    $("#invoiceItems").append(newItemRow);

    //update total amount on every item added
    updateTotalAmount();
}

//Remove Invoice Items
function removeInvoiceItem(itemId) {
    $(`#itemRow${itemId}`).remove();
        updateTotalAmount();
}

//Final Total Amount
function updateTotalAmount() {
    let finalTotalAmount =0; //new variable declared 

    $("tr[id^='itemRow']").each(function(){
    const itemPrice = parseFloat($(this).find(".itemPrice").val()) || 0;
    const quantity = parseFloat($(this).find(".quantity").val()) || 0;
    const totalItemPrice  = itemPrice * quantity;

    $(this).find(".totalItemPrice").val(totalItemPrice.toFixed(2));
    finalTotalAmount += totalItemPrice;
    });

    $("#finalTotalAmount").val(finalTotalAmount.toFixed(2));
}

//Invoice Date: automatically generated 
$(document).ready(function () {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10); 
    $("#invoiceDate").val(formattedDate);
    });

    ("#invoiceForm").submit(function (event){
    event.preventDefault();
    });
    updateTotalAmount();
