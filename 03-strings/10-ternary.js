// ## Question 10 — Ternary Operator

// Take a user’s age using `prompt()`.

// Using only a ternary operator, store:

// ```
// "Adult"
// ```

// if age is `18` or above, otherwise store:

// ```
// "Minor"
// ```

// Print the final result.

const userAge = Number(prompt("Enter your age: "));

let remarks = userAge >= 18 ? "Adult" : "Minor";

console.log(remarks);