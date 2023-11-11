const container = document.getElementById('container');

const imgs = document.querySelectorAll("#container img");

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// สร้างตัวนับภาพ

let idx = 0;

let interval = setInterval(slide,2000)

function slide(){
    idx++;
    chageImage()
}

function chageImage(){
    // 0 => 500 => 1000 => 1500
    // 0 => 1*500 => 2*500 => 3*500
    if(idx >imgs.length-1){
        idx = 0;
    }else if(idx<0){
        idx = imgs.length-1
    }
    container.style.transform = `translateX(${-idx*500}px)`
}
leftBtn.addEventListener('click',()=>{
    idx--; 
    chageImage()
    resetInterval()
})
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(slide,2000)
}
rightBtn.addEventListener('click',()=>{
    idx++;
    chageImage()
    resetInterval()
})