// Counting increment decrement and cost
let firstClassCost = 0, ecoClassCost = 0;
function valueChange(idName, verify) {
    const grabbedQuantity = document.getElementById(idName);
    let currentQuantity = 0;
    if (verify == true) {
        currentQuantity = parseInt(grabbedQuantity.value) + 1;
    }
    else if (verify == false && grabbedQuantity.value > 0) {
        currentQuantity = parseInt(grabbedQuantity.value) - 1;
    }
    grabbedQuantity.value = currentQuantity;
    if (idName == "firstClassQuantity")
        firstClassCost = currentQuantity * 150;
    else
        ecoClassCost = currentQuantity * 100;

    total(firstClassCost, ecoClassCost);
}


//Calculating total with help of subtotal and tax
function total(firstClassCost, ecoClassCost) {
    let currentSubTotal, tax, total;
    currentSubTotal = firstClassCost + ecoClassCost;
    document.getElementById("subTotal").innerText = currentSubTotal;
    tax = currentSubTotal * 10 / 100;
    document.getElementById("tax").innerText = tax;
    total = currentSubTotal + tax;
    document.getElementById("total").innerText = total;
}


//displaying confirmation message
function confirmation(){
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("confirmCost").innerHTML = document.getElementById("total").innerHTML;
    document.getElementById("confirm").style.display = "block";
}