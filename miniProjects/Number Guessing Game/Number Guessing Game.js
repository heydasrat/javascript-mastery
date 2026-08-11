let random = Math.floor(Math.random() * 10) + 1;

let userGuess = Number(prompt("Enter your digit: "));

while (userGuess != random) {
    console.log("Wrong!");
    userGuess = Number(prompt("Enter again your digit: "));
}

console.log("Congrats!");