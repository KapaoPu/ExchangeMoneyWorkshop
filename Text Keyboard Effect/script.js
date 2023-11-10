const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'Hello, world'
let speed = 300/speedEl.value

let charID = 0

writeText()

function writeText(){
    textEl.innerText = text.slice(0,charID)
    charID++
    if(charID>text.length){
        charID = 0
    }
    setTimeout(writeText,speed) /* ให้เรียกใช้ function writeText ตาม speed (delay)*/
}

speedEl.addEventListener('input',(e)=>{
    speed = 300/e.target.value
})