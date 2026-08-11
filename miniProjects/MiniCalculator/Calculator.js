let firstNum = Number(prompt("Enter your first number: "));
let operator = prompt("Enter your Operator: ");
let lastNum = Number(prompt("Enter your last number: "));

if (operator === "+") {
    console.log(firstNum + lastNum);
} else if (operator === "-") {
    console.log(firstNum - lastNum);
} else if (operator === "*") {
    console.log(firstNum * lastNum);
} else if (operator === "/") {
    if (lastNum === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log(firstNum / lastNum);
    }
} else {
    console.log("Invalid operator");
}