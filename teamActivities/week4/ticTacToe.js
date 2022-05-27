const grid = document.getElementById("grid");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

let turn = 1;

function xAndO(event) {
    if (turn === 1) {
        event.target.innerText = "X";
        turn = 2;
    } else {
        event.target.innerText = "O";
        turn = 1;
    }
}

function reset(event) {
    one.innerText = "";
    two.innerText = "";
    three.innerText = "";
    four.innerText = "";
    five.innerText = "";
    six.innerText = "";
    seven.innerText = "";
    eight.innerText = "";
    nine.innerText = "";
}

one.addEventListener("touchend", xAndO);
two.addEventListener("touchend", xAndO);
three.addEventListener("touchend", xAndO);
four.addEventListener("touchend", xAndO);
five.addEventListener("touchend", xAndO);
six.addEventListener("touchend", xAndO);
seven.addEventListener("touchend", xAndO);
eight.addEventListener("touchend", xAndO);
nine.addEventListener("touchend", xAndO);

btn = document.getElementById("button");
btn.addEventListener("click", reset);
