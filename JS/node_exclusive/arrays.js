console.log("This tutorial we will be dealing with arrars")
let a=[2,4,5,8,3,6,1,7]
console.log(typeof(a))
console.log(a[2])
console.log(a[9])
console.log(a.toString())
console.log(a.join(" and "))
console.log(a[2])
console.log(a.pop()) //the popped element will be displayed
console.log(a.push("hello")) 
console.log(a[7][0]) //print the first letter of the string at index 7 of the array 
console.log(a.shift())  //pop the starting element
console.log(a.unshift("start")) //push data at the beggining
console.log(a)
// ----------------------------------------------------------------------------
let b=[4,5,8,7,3,1,6,9,2]
console.log(b.length)// actualy 8+ 1 empty
console.log(b.sort())//b.sort() without any argument doesn't guarantee the correct sorting order for numbers. This is because by default, sort() compares the string Unicode values*/
delete b[7]
console.log(b) //here we donot see the element but still the memory is  allocated!!

let a1=[2,4,6,8]
let a2=[1,3,5,7]
let a3=[9,10,22,23]
console.log(a1.concat(a2))
console.log(a1.concat(a3,a2))


let arr=[1,2,3,4,5,6,7,8,9]
arr.splice(2,4)
console.log(arr)

arr.slice(2)
console.log(arr)


// For array mutation such as creating a new array from another keeping the prevoius same , or to filter the extisting array such as keep the elements greater than 4, or to perform a opertaion on the array... 
// we have distinct functionns for that MAP , FILTER , REDUCE 


const numbers1=[2,3,8,4,6]
const new_numbers1=numbers1.map((n)=>
{
    return n**2
})
console.log(new_numbers1)


const numbers2=[2,5,9,7,6,3]
const even_num=numbers2.filter((n)=>
{
    return n%2==0
})
console.log(even_num)

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((p,q) => {
  return p + q;
}, 0);

console.log(sum); // Output: 15
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array is not modified)

