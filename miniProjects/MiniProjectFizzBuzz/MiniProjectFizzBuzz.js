// ## Question 22 — Mini Project: FizzBuzz

// Print numbers from `1` to `50`.

// Rules:

// - multiple of `3` → `Fizz`
// - multiple of `5` → `Buzz`
// - multiple of both `3` and `5` → `FizzBuzz`
// - otherwise print the number

// Make sure `15`, `30`, and `45` print `FizzBuzz`, not just `Fizz` or `Buzz`.


for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}