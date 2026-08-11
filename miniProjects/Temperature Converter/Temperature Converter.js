let userChoice = prompt("Celsius (1) or Fahrenheit (2):");

function celToFah(digits) {
    let f = (digits * 9 / 5) + 32;
    console.log(f);
}

function fahToCel(digits) {
    let c = (digits - 32) * 5 / 9;
    console.log(c);
}

if (userChoice == 1) {
    let celsius = Number(prompt("Enter your Celsius: "));
    celToFah(celsius);
} else if (userChoice == 2) {
    let fahrenheit = Number(prompt("Enter your Fahrenheit: "));
    fahToCel(fahrenheit);
}