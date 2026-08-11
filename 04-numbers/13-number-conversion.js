// ## Question 13 — Number Conversion and Validation

// Given:

// 
// let price = "499px";
// let rating = "4.8stars";
// let invalidValue = "hello";
// 

// Use the appropriate methods to produce:

// 
// 499
// 4.8
// NaN
// 

let price = "499";
let rating = "4.8stars";
let invalidValue = "hello";

console.log(parseInt(price))
console.log(parseFloat(rating))
console.log(Number(invalidValue))