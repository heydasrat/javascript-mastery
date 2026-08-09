// 1. Check whether `"Script"` exists.
// 2. Find the index of `"is"`.
// 3. Extract `"JavaScript"` using `slice()`.
// 4. Extract `"powerful"` using `substring()`.
// 5. Replace `"powerful"` with `"awesome"`.
// 6. Check whether the string starts with `"Java"`.
// 7. Check whether it ends with `"powerful"`.
// 8. Print the first character using both `charAt()` and bracket notation.

let text = "JavaScript is powerful";

const isSciptExists = text.includes("Script")
const indexOfIs = text.indexOf("is")
const javaScriptFromText = text.slice(0,10)
const powerFull = text.slice(14,22)
const replace = text.replace("powerful","awesome")
const startWith = text.startsWith("Java")
const endWith = text.endsWith("powerfull")
const firstCharWithNotation = text[0]
const firstCharWithCharAt = text.charAt(0)
