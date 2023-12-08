console.log("Hello I am conditional tutorial ...")

let age = 20;
if (age >= 18) {
    console.log("You can drive..")
}
else if (age <= 0) {
    console.log("Are you kidding..!!")
}
else {
    console.log("Cannot drive..")
}
let x = 2, y = 3, z;
z = (x > y) ? x * y : x + y; //Ternary opeartor..
console.log("The value is " + z)

let b=5;
let ver=b>=18?"Can Vote..!!":b<=0?"Are you kidding..!!":"Cannot Vote..!!";
console.log("Nested Ternary operator result is "+ver)