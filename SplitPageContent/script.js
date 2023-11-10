const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseenter',()=>{
    container.classList.remove('hover-right')
    container.classList.add('hover-left')
})
right.addEventListener('mouseenter',()=>{
    container.classList.remove('hover-left')
    container.classList.add('hover-right')
})