let buttton=document.getElementById("btn")
buttton.addEventListener("lclick",()=>{
    alert("I was clicked..!!")
    document.querySelector(".box").style.color="red"
})
buttton.addEventListener("contextmenu",()=>{
    // document.querySelector(".box").style.color="red"
    alert("Right clicked... do not press")
})
document.addEventListener("keyup",(e)=>{
    // alert(e.key)
    console.log(e.key)
})