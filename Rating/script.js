const ratingContainer = document.querySelector('.ratings-container')
const rating = document.querySelectorAll('.rating')
const panel = document.getElementById('panel')
const sendBtn = document.getElementById('send')

let selected;
ratingContainer.addEventListener('click', (e) =>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selected = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', ()=>{
    let checked = check()
    if(checked== true){
        Swal.fire({
            icon: 'success',
            title: 'ขอบคุณที่ใช้บริการ',
            text: `ผลการประเมิน ${selected}`,
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
        });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'เลือกแบบการประเมินก่อนส่งผลการประเมิน',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
        });
    }
})

function removeActive(){
    for(let i = 0; i < rating.length; i++){
        rating[i].classList.remove('active')
    }
}

function check(){
let u = 0
    for(let i = 0; i < rating.length; i++){
        if(rating[i].classList.contains('active') === false){
            u += 1
            if(u == 3){
                return false
            }
        }
    }
    return true
}