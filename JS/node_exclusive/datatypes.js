console.log("Hey this js tutorial of data types and variables...")
var a = 5;
a += 1;
var b = 6;
var c = "Parthib";
console.log(a + b + 6)
console.log(typeof (a), typeof b, typeof (c))
console.log("var is globally scoped and let is locally scoped, used to name data types..")

var x1 = 6;
{
    let x1 = 9;
    console.log("localy value  of x updated to " + x1)
}
console.log("Actual value remains " + x1 + ", since var was used while declaration which is global scope !!")

let x="Dragoon"
let y=22;
let z=3.66;
const p=6.314;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

console.log("**The type of null is oblect**")

let o={
    name:"Parthib",year:"2nd",regular:true
}
console.log(o)
o.stream="Btech"
console.log(o);
