console.log("In this tutorial we will look into dom and its some of commands , we can directly use these in the console but here wi'll gonna use it in the script itself..")

console.log(document.body.childNodes)
//returns a list
// [text, div.container, text, script]
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
// [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// text is empty spaces or tabs..
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].firstChild)
console.log(document.body.childNodes[1].lastChild)

// All childs are not elements so to get the first element child we use.. firstElementChild 

console.log(document.body.childNodes[1].firstElementChild)
document.body.childNodes[1].firstElementChild.style.backgroundColor="red"

console.log(document.body.childNodes[1].firstElementChild.parentElement)

console.log(document.body.childNodes[1].firstElementChild.parentElement)

console.log(document.body.childNodes[1].firstElementChild.previousElementSibling)
// undefined
console.log(document.body.childNodes[1].firstElementChild.previousSibling)
// #text
console.log(document.body.childNodes[1].firstElementChild.nextElementSibling)

console.log(document.body.childNodes[1].firstElementChild.nextSibling)
// #text
