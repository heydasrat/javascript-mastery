let word = String(prompt("Enter a string: "));
let vowels = 0;

if (word.trim() === "") {
    console.error("Please provide a valid word!");
} else {
    for (let i of word) {
        if ("aeiou".includes(i.toLowerCase())) {
            vowels++;
        }
    }

    console.log(vowels);
}