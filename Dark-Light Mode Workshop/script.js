const switchToggle=document.querySelector('input[type="checkbox"]')
const toggle_icon =  document.getElementById('toggle-icon')
const nav = document.getElementById('nav')
const image1 = document.getElementById('img1')
const image2 = document.getElementById('img2')
const image3 = document.getElementById('img3')
function swichMOde(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkmode()
        imageSwitchMode('dark');
    }
    else{
        document.documentElement.setAttribute('data-theme','light')//setAttribute(ชื่อclass . เปลี่ยนเป็น)
        lightmode()
        imageSwitchMode('light')
    }
}

function darkmode(){
    toggle_icon.children[0].textContent="โหลดกลางคืน"
    toggle_icon.children[1].classList.replace('fa-sun' , 'fa-moon')
    nav.style.backgroundColor="rgb(0 0 0/50%)";
}
function lightmode(){
    toggle_icon.children[0].textContent="โหลดกลางวัน"
    toggle_icon.children[1].classList.replace('fa-moon' , 'fa-sun')
    nav.style.backgroundColor= "rgb(255 255 255/50%)";
}
function imageSwitchMode(mode){
    image1.src=`img/undraw_Projection_${mode}.svg`
    image2.src=`img/undraw_gaming_${mode}.svg`
    image3.src=`img/undraw_freelance_${mode}.svg`
}
switchToggle.addEventListener("change",swichMOde)