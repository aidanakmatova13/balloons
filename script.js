// const refresh = document.querySelector('.refresh')
// const balloons = document.querySelectorAll('.balloon')
// const grey= document.querySelectorAll('.grey')
// const boxes= document.querySelector('.boxes img')
// const balloon = document.querySelectorAll('.balloon')
//
// let idx = 0

// balloons.forEach(el =>{
//     el.addEventListener('click', () =>{
//         grey[idx++].src = el.src
//     })
// })
//
//
// refresh.addEventListener('click', () => {
//     grey.forEach((item) => {
//         item.src = "./images/standard_white.gif"
//     })
//     idx = 0
// })
//
//
// balloon.forEach(item =>{
//     item.addEventListener('click', () =>{
//         item.src = "./images/standard_white.gif"
//         idx--
//     })
// })




// refresh.addEventListener("click",()=>{
//     // boxes.getAttribute('src')
//     removeEventListener('click')
// })



// function refreshPage(){
//     window.location.reload();
// }



// balloons.forEach(balloon =>{
//     boxes.forEach((box, idx) =>{
//         balloon.addEventListener('click', ()=>{
//             boxes[idx++].src = balloon.src
//         })
//     })
// })


// grey[idx].src


//boxes.src




//EXAMPLE THIS
// const obj = {
//     x: 10,
//     y: 30,
//     perimeter : function (){
//         return (this.x +this.y) * 2
//     }
// }
// console.log(obj.perimeter())


//YANDEX
// const object = {
//     value: "42",
//     print: function (){
//         const type = () =>{
//             return typeof this.value
//         }
//         console.log(`${this.value} is ${type()}`)
//     }
// }
// console.log(object.print())

//если вместо стрелочной функции обычная функция то выведит 42 is undefined



//EXAMPLE
// const obj = {
//     bar: 1,
//     foo: function (){
//         return this.bar
//     }
// }
// console.log(obj.foo())
//
// const _foo = obj.foo
//
// console.log(_foo())



// function foo() {
//     let x = 0
//     x++
//     return x
// }
//
// console.log(foo()) // выведится 1
// console.log(foo()) // выведится 1
// console.log(foo()) // выведится 1

//ЗАМЫКАНИЕ
// function foo() {
//     let x = 0
//     return function () {
//         x++
//         return x
//     }
// }
// const example = foo()
// console.log(example()) // выведится 1
// console.log(example()) // выведится 2
// console.log(example()) // выведится 3
// console.log(example()) // выведится 4
// console.log(example()) // выведится 5



//Codewars
// const multiplyAll = arr =>{
//     return num =>{
//         return arr.map(item => item*num)
//     }
// }
// console.log(multiplyAll([1, 2, 3])(2))


// const sum = (a,b) =>{
//     return b === undefined ? (b) => a+b : a+b
// }
//
// const temp = sum(1)
// console.log(temp(2))
// console.log(sum(1, 2))
// console.log(sum(1)( 2)) // b === undefined



// const func = arr =>{
//     return type =>{
//         return arr.filter(item =>typeof item === type)
//     }
// }
// console.log(func([1,3,4,'str', 6])('number'))
// console.log(func([1,3,4,'str', 6])('string'))
// console.log(func([1,3,4,'str', 6])('str')) // пустой массив



// function simpleArraySum(ar) {
//     return ar.forEach(item => item+item)
// }
// console.log(simpleArraySum())


