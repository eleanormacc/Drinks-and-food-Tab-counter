let itemCounter = 0;

//Add Invoice Items
function addInvoiceItem(){
    itemCounter++;

    const newItemRow = `
    <tr id="itemRow${itemCounter}">
    <td><input type="text" class="form-control" placeholder="Enter Item Name" required></td>
    <td><input type="number" class="form-control itemPrice" placeholder="Enter Item Price" required></td>
    <td><input type="number" class="form-control quantity" placeholder="Enter Quantity" required></td>
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

function updateTotalAmount(){
}
