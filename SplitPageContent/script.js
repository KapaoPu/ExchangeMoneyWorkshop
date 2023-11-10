const container = document.querySelector('.container')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const remove_bar = document.querySelector('.remove')

left.addEventListener('mouseenter',()=>{
    container.classList.add('hover-left')
    left.classList.add('remover-bar')
})
right.addEventListener('mouseenter',()=>{
    container.classList.add('hover-right')
    right.classList.add('remover-bar')
})
left.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-left')
    left.classList.remove('remover-bar')
})
right.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-right')
    right.classList.remove('remover-bar')
})