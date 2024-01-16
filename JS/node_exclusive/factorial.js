console.log("This tutorial we will find factorial using our for loop and also using  reduce function discussed in previous  tutorials")

// using for loop traditionl method.. 
let num = 5; // number to calculate the factorial of
let fact =1
    for( let i=1;i<=num;i++)
    {
        fact=fact*i 
}
console.log(fact)

// using reduce function
let a=6;
function fact_reduce(number)
{
    let arr=Array.from(Array(number+1).keys())
    let factorial=(arr.slice(1,)).reduce((a,c)=>{return(a*c)},1)
     console.log(factorial)
}
fact_reduce(a)