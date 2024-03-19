function addition(a,b){
    return a+b;
}
function subtraction (a,b){
    return a-b;
}
function division(a,b){
    return a/b;
}
function multiplication (a,b){
    return a*b;
}

function operation (operator, firstNum,secondNum){
   
    if (operator=='+'){
        return addition(firstNum,secondNum);
    }
    else if(operator=='-'){
        return subtraction(firstNum,secondNum);
    }
    else if (operator == '/'){
        return division(firstNum,secondNum);
    }
    else if (operator == '*'){
        return multiplication(firstNum,secondNum);
    }
}

function numberButton(el){

     document.getElementById("numberArea").value = el.innerHTML;
     let buttonValue=document.getElementById("numberArea").value;
}

let firstNum = numberButton(5);
console.log(firstNum);

// function operatorButton(){
// if(opr=='+' || opr=='-' || opr=='/' || opr=='*'){
//     let num1 = parseInt(prompt('Input first number'));
//     let num2 = parseInt(prompt('Input second number'));
//     console.log(operation(opr,num1,num2));
// }
// else if(opr!='+' || opr!='-' || opr!='/' || opr!='*'){
//         alert('wrong input, please try again!')
//         location.reload();
//     }








