alert("Welcome to the veryHard Calculator challenge!");
let num1 = prompt("Enter first number");
let Operations = prompt("Enter Operations (either +, -, * or /)");
let num2 = prompt("Enter second number");

function add(n1,n2){
    return Number(n1) + Number(n2);
}
function subtract(n1,n2){
    return Number(n1) - Number(n2);
}
function multiply(n1,n2){
    return Number(n1) * Number(n2);
}
function divide(n1,n2){
    return Number(n1) / Number(n2);
}

function calculate(n1,n2,Operations){
    if (Operations == "+"){
        return add(n1,n2);

    } else if (Operations == "-"){
        return subtract(n1,n2);

    } else if (Operations == "*"){
        return multiply(n1,n2);

    } else if (Operations == "/"){
        return divide(n1,n2);
    } else {
        return "ERROR Make Sure to Enter Only Numbers and Operations ERROR";
    }
}
console.log(num1 + " " + Operations + " " + num2 + " = " + calculate(num1,num2,Operations));
document.write(num1 + " " + Operations + " " + num2 + " = " + calculate(num1,num2,Operations));