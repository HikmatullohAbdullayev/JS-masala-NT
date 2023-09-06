// const texts = document.getElementById ('text')
// const title1 = document.getElementById ('title')
// Style berish 
// console.log((document.body.children[1].style.color = "red"));
// Boshqa sahifaga olish
// setTimeout(() => {
//     window.location.href = "https://www.youtube.com/"
// },3000)




let color1 = document.getElementById ("color1")
let yellow = document.getElementById ("color2")
let green = document.getElementById ("color3")




let countR = setInterval (() => {
    color1.style.backgroundColor ="red"
},1000)
let countY = setInterval (() => {
    yellow.style.backgroundColor ="yellow"
},3000)
let countG = setInterval (() => {
    green.style.backgroundColor ="green"
},6000)



 setTimeout ( () => {
    clearInterval (countR);
    color1.style.backgroundColor ="white"
},3000)
setTimeout ( () => {
    clearInterval (countY);
    yellow.style.backgroundColor ="white"
},6000)
setTimeout ( () => {
    clearInterval (countG)
    green.style.backgroundColor ="white"
},9000)
