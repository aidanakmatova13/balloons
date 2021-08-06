const refresh = document.querySelector('.refresh')
const balloon = document.querySelectorAll('.balloon')
const grey= document.querySelectorAll('.grey')
const boxes= document.querySelector('.boxes img')
const src= document.get

let idx = 0

balloon.forEach(el =>{
    el.addEventListener('click', ()=>{
        grey[idx++].src = el.src
    })
})


refresh.addEventListener('click', () => {
    grey.forEach((item) => {
        item.src = "./img/standard_white.gif"
    })
    idx = 0
})


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