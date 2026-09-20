let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let waitingForSecondNumber = false;

function appendNumber(number) {

    if (display.innerText === "0" || waitingForSecondNumber) {
        display.innerText = number;
        waitingForSecondNumber = false;
    } 
    else {
        display.innerText += number;
    }
}

function chooseOperator(selectedOperator) {

    if (operator !== "" && !waitingForSecondNumber) {
        calculate();
    }

    firstNumber = display.innerText;
    operator = selectedOperator;
    waitingForSecondNumber = true;
}

function calculate() {

    if (operator === "" || firstNumber === "") {
        return;
    }

    let secondNumber = display.innerText;
    let result;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {

        if (num2 === 0) {
            display.innerText = "Error";
            return;
        }

        result = num1 / num2;
    }

    display.innerText = result;

    firstNumber = "";
    operator = "";
    waitingForSecondNumber = false;
}

function clearDisplay() {

    display.innerText = "0";

    firstNumber = "";
    operator = "";
    waitingForSecondNumber = false;
}

function deleteLast() {

    if (display.innerText.length > 1) {
        display.innerText =
            display.innerText.slice(0, -1);
    }
    else {
        display.innerText = "0";
    }
}