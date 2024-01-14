console.log("Here we will lok more on dom , selecting bu id , class, query selectors, matches, closest, contains ")

const boxes= document.getElementsByClassName("box")
console.log(boxes)// a list is printed
boxes[3].style.backgroundColor="red"
boxes[1].style.color="blue"


document.getElementById("coloured").style.backgroundColor="purple"

// query selector selects the first element of the given selector here i have given box so the first div box will be selected
const q=document.querySelector(".box")
q.style.backgroundColor="green"

const allBoxes = document.querySelectorAll('.box')
//returns a list
//NodeList(5) [div.box, div.box, div#coloured.box, div.box, div.box]
allBoxes[2].style.backgroundColor="aqua"
document.querySelectorAll(".box").forEach(element => {
    element.style.color="yellow"
});

const tag=document.getElementsByTagName("div")
// // all divs will be printed 
tag[2].matches("#coloured")

document.getElementsByTagName("div")[3].closest("#coloured")

document.getElementsByTagName("div")[3].closest("#coloured")
document.getElementsByTagName("div")[1].closest("#coloured")
// null



console.log(document.querySelector("html").contains(document.querySelector("body")))
// true
console.log(document.querySelector("body").contains(document.querySelector("html")))
// false
console.log(document.querySelector("body").contains(document.querySelector("#coloured")))
// true
console.log(document.querySelector(".container").contains(document.querySelector("#coloured")))
// true
console.log(document.querySelector(".container").contains(document.querySelector(".box")))
// true
console.log(document.querySelector(".box").contains(document.querySelector(".container")))
// false





