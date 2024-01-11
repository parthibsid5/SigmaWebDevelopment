console.log("I am a tutorial on loops such as 'for' 'for in' 'for of' 'while' 'dowhile' ")
for(let i=0;i<6;i++)
{
    console.log(i)
}

obj={
    "name":"Parthib","Roll":123,"Dept":"CSE"
}
for (const key in obj)
{
    // console.log(key)
    const el=obj[key]
    console.log(key+" : "+el)
}

 arr=[1,2,3,5,6,7,33,9,12]
 for (const value of arr)
 {
    console.log(value)
 }

 let v=6
 while(v!=0)
 {-
    console.log(v)
    v--
 }
 
 let dw=4
 do{
    console.log(dw)
    dw--
 }
 while(dw>=0)