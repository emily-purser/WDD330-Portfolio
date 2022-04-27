// Requirement 1
function displayInput() {
    let input = document.getElementById('text-input').value;
    document.getElementById('output').innerHTML = input;
}

//Requierment 2
function addToNumber(){
    let input = document.getElementById('number').value;
    let total = 0;
    for(let i=1; i<=input; i++) {
        total += i;
    }
    document.getElementById('output2').innerHTML = 'Total' + total;
}

// Requirement 3
function addMachine(){
    let input1 = parseInt(document.getElementById('number1').value);
    let input2 = parseInt(document.getElementById('number2').value);
    let sum = input1 + input2;
    document.getElementById('output3').innerHTML ='Total' + sum;
}

//Stretch Goal
function getNumber(numberId){
    let input = parseFloat(document.getElementById(numberId).value);
    return input;
}
// function declaration
function add(num1, num2){
    return num1 + num2;
}
// function expression
const subtract = function subtract(num1, num2){
    return num1 - num2;
}
// arrow functions
const multiply = (num1, num2) => num1 * num2;

const output = (value) => document.getElementById('output4').innerHTML = 'Total' + value;

// callback
function arithmetic(operation) {
    const total = operation(
        getNumber('numberS1'),
        getNumber('numberS2')
    );
    output(total);
}