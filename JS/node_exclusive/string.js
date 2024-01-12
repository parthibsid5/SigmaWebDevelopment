console.log("This is a string tutorial..")
let a="Sambar"
console.log(typeof(a))
console.log(a[5])
console.log(a[15]) //returns undefined but not error!!
console.log("The length of the string is ",a.length)

// template literals
const n = "John";
const age = 30;
const city = "New York";
console.log(`Hello, my name is ${n}. I am ${age} years old and i live in ${city}`)

//strings are immutable..
 console.log(n.toLocaleUpperCase()) //original string remains unaltered!!
 console.log(n.slice(0,2))


