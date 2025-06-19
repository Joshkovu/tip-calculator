
let secondButton =document.querySelector(".tip__button2")
let paragraph = document.querySelector("p");
let span = document.querySelector(".tip__value")
let span2 = document.querySelector(".tip__span")
function enter () {
    let firstInput = parseFloat(document.querySelector("#input1").value)
let secondInput = parseFloat(document.querySelector("#input2").value)
let thirdInput = parseFloat(document.querySelector("#input3").value)
   let total = firstInput + (secondInput/100 + firstInput)
    span.innerHTML=total.toFixed(0)
    span2.innerHTML=total.toFixed(0)/thirdInput
}




  function calculateTotal(num1,num2){
    return num1 + (num2/100 + num1)
  }
  console.log(calculateTotal(40,80))