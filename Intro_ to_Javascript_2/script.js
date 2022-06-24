let operator = prompt("Pleas enter operator you want to perform:\n +, -, /, *,  %");
let firstNumber = Number(prompt("Enter first Number "));
let secondNumber = Number(prompt("Enter second Number "));
let Result;
if (operator == "+"){
    Result = firstNumber + secondNumber
    alert("Result is " + Result)
} else if (operator == "-"){
    Result = firstNumber - secondNumber
    alert("Result is " + Result)
} else if (operator == "*"){
    Result = firstNumber * secondNumber
    alert("Result is " + Result)
} else if (operator == "/"){
    Result = firstNumber / secondNumber
    alert("Result is " + Result)
} else if (operator == "%"){
    Result = firstNumber % secondNumber
    alert("Result is " + Result)
} else {
    alert("Enter Valid Operator Input ")
}

