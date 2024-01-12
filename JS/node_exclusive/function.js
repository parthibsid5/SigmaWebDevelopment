console.log("we will be delaing with loops here")
function display(name) {
    console.log(`Hi ` + name)
    console.log(`Are you doing well ` + name)
    console.log(name + ` is very good `);
}
display('Robin')

function sum(aa, bb) {
    let pp = aa + bb;
    return pp
}
let v = sum(3, 4)
console.log(`The sum is ` + v);

console.log('Arrow function ')
const show = (x) => {
    console.log(`I sm arrow function `, x);
}
show(5)