// variable assigment for quantityCalulator function
let amountForQty = document.getElementById("amount-available");
let priceInput = document.getElementById("price");
let buyQuantity = document.getElementById("buy-quantity");
let qtycalculatorBtn = document.getElementById("qty-calulator-btn");

function quantityCalculator(){
    let amount = parseInt(amountForQty.value);
    let price = parseInt(priceInput.value);
    let buyableQuantity = Math.trunc(amount/price);
    buyQuantity.innerText = buyableQuantity;
    console.log(amount);
}

// variable assigment for percentageCalculator function
let amountForPercentage = document.getElementById("amount");
let percentageToConvert = document.getElementById("percentage");
let percentageCalculatorBtn = document.getElementById("percentage-calulator-btn");
let percentageItem = document.getElementById("percentage-calculated");

function percentageCalulator(){
    let amountInput = parseInt(amountForPercentage.value);
    let percentageValue = parseInt(percentageToConvert.value) / 100;
    let percentageOutput = amountInput * percentageValue;
    percentageItem.innerText = percentageOutput;
}

//eventlistner for qtycalculatorBtn function 
qtycalculatorBtn.addEventListener("click", function(){
    quantityCalculator();

})

//eventlistner for percentageCalculatorBtn function 
percentageCalculatorBtn.addEventListener("click", function(){
    percentageCalulator();
})

