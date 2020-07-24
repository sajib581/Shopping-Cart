let minusButton1 = document.getElementById("minus-btn-1")
let minusButton2 = document.getElementById("minus-btn-2")
let plusButton1 = document.getElementById("plus-btn-1")
let plusButton2 = document.getElementById("plus-btn-2")
let input1 = document.getElementById("input-1")
let input2 = document.getElementById("inpu2-2")
let crossBtn1 = document.getElementById("cross-btn-1")
let crossBtn2 = document.getElementById("cross-btn-2")
let subtotal = document.getElementById("subtotal")
let tax = document.getElementById("tax")
let total = document.getElementById("total")

let mobilePrice = document.getElementById("mobile-price")
let casePrice = document.getElementById("case-price")

let orderButton = document.getElementById("orderButton")

plusButton1.addEventListener("click", function() {
    plus_functionalitis(input1)
    disabled(input1, minusButton1)
    transactionSystem(input1, mobilePrice)
})
minusButton1.addEventListener("click", function() {
    minus_functionalitis(input1)
    disabled(input1, minusButton1)
    transactionSystem(input1, mobilePrice)
})
plusButton2.addEventListener("click", function() {
    plus_functionalitis(input2)
    disabled(input2, minusButton2)
    transactionSystem(input2, casePrice)
})
minusButton2.addEventListener("click", function() {
    minus_functionalitis(input2)
    disabled(input2, minusButton2)
    transactionSystem(input2, casePrice)
})
input1.addEventListener("keyup", function(event) {
    transactionSystem(input1, mobilePrice)
    disabled(input1, minusButton1)
})
input2.addEventListener("keyup", function() {
    transactionSystem(input2, casePrice)
    disabled(input2, minusButton2)
})
crossBtn1.addEventListener("click", function() {
    input1.value = 00
    transactionSystem(input1, mobilePrice)
    document.getElementById("1st-view").style.display = "none"

})
crossBtn2.addEventListener("click", function() {
    input2.value = 00
    transactionSystem(input2, casePrice)
    document.getElementById("second-view").style.display = "none"
})

orderButton.addEventListener("click", function() {
    document.getElementById("transaction").style.display = "none"
        //orderButton.style.display = "block"
    document.getElementById("order").style.display = "block"
})

//All Functions

function plus_functionalitis(input) {
    input.value++
}

function minus_functionalitis(input) {
    input.value--
}

function disabled(input, button) {
    if (parseInt(input.value) < 1) {
        //button.setAttribute('disabled', '') same
        document.getElementById(button.id).disabled = true;
    } else {
        button.removeAttribute('disabled')
    }
}

function transactionSystem(input, devicePrice) {
    getMobilePrice(input, devicePrice)
    mobilePriceValue = parseInt(mobilePrice.innerText)
    casePriceValue = parseInt(casePrice.innerText)

    let subTotalValue = mobilePriceValue + casePriceValue
    subtotal.innerText = subTotalValue

    let taxValue = Math.round((subTotalValue * 8) / 100)
    tax.innerText = taxValue

    let totalValue = subTotalValue + taxValue
    total.innerText = totalValue
}

function getMobilePrice(input, devicePrice) {
    let unitPrice
    if (input.id == "input-1") {
        unitPrice = 1219
    } else {
        unitPrice = 59
    }
    let devicePriceValue = parseInt(input.value) * unitPrice
    if (devicePriceValue) {
        devicePrice.innerText = devicePriceValue
    } else {
        input.value = 0
        devicePrice.innerText = 0
    }

}