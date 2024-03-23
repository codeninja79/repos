let previousVal = '';
let currentVal = '';
let operation = '';

document.addEventListener("DOMContentLoaded", function(){
    let clearButton = document.querySelector(".clear");
    let operationButton = document.querySelectorAll(".operation");
    let resultButton = document.querySelector(".result");
    let numberButtons = document.querySelectorAll(".number");
    let decimalButton = document.querySelector(".decimal")

    let previousNum = document.querySelector(".firstNum");
    let currentNum = document.querySelector(".secondNum");
    
    numberButtons.forEach((num) => num.addEventListener("click", function(e){
        numberButtonDisplay(e.target.textContent);
        currentNum.textContent = currentVal;
    })) 

    operationButton.forEach((opr) => opr.addEventListener("click", function(e){
        operatorButtonDisplay(e.target.textContent);
        previousNum.textContent = previousVal + " " + operation;
        currentNum.textContent = currentVal;
        
    }))

    clearButton.addEventListener("click", function(){
        previousVal = '';
        currentVal = '';
        operation = '';
        previousNum.textContent = '';
        currentNum.textContent = '';
    })
    
    resultButton.addEventListener("click", function(){
    if(currentVal!='' && previousVal!=''){
        equalsButtonDisplay();
        previousNum.textContent = '';
        if(previousVal.length<=10)
            currentNum.textContent = previousVal;
        else
            currentNum.textContent = previousVal.slice(0,5) + '...'
 } })

    decimalButton.addEventListener("click", function(){
        if(!currentVal.includes("."))
            currentVal += ".";
    })
})

function numberButtonDisplay(numbers){
    if(currentVal.length<= 10){
    currentVal+=numbers;
    }
}

function operatorButtonDisplay(operator){
    operation = operator;
    previousVal = currentVal;
    currentVal = '';

}

function equalsButtonDisplay(){
    previousVal = Number(previousVal);
    currentVal = Number(currentVal);

    if(operation=='+')
        previousVal+=currentVal;
    else if(operation == '-')
        previousVal-=currentVal;
    else if(operation == '/')
        previousVal/=currentVal;
    else if(operation == 'x')
        previousVal *=currentVal;

    previousVal = Math.round(previousVal * 1000)/1000;
   
    previousVal = previousVal.toString();
   
    currentVal = previousVal.toString();
}










