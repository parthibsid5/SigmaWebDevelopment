console.log(`This is loop tutorial`);
console.log(`The logic is same as we use in programming`);
let i
for (i = 0; i <= 5; i++) {
    console.log(i + 1)
}
let obj = { name: "Parthib", college: "JIS", roll: 123 }
console.log(obj)

for (const property in obj) {
    console.log(property)
    const element = obj[property]
    console.log(element);

}

let a = "Anshuman"
for (let i of a) {
    console.log(i)
}

let p = 0
while (p < 6) {
    console.log(p)
    p++
}