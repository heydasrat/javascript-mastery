// ### `break` and `continue`

// Print numbers from `1` to `20`:

// - skip multiples of `3` using `continue`
// - completely stop the loop when the number reaches `17` using `break`

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        continue
    }
    if (i == 17) {
        break
    }
    console.log(i)
}