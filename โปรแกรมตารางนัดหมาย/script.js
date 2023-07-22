const countDownForm = document.getElementById('countDownForm')
const inputContainer = document.getElementById('input-container')
const dataEl = document.getElementById('date-picker')
const countDownEl = document.getElementById('countdown')

const countdownTitleEl = document.getElementById('countdown-title')
const countdownButtonEl = document.getElementById('countdown-button')
const timeEl = document.querySelectorAll('span')

const completeEl = document.getElementById('complete')
const completeInfoEl = document.getElementById('complete-info')
const completeButtonEl = document.getElementById('complete-button')

// ตัวแปรควบคุมการทำงาน

let countDownTitle=''
let countDownDate = ''

let countdownValue=Date; //เก็บวันที่เลือกแบบฟอร์ม
let countDownActive; //ตัวนับเวลา
let saveCountDown;// เก็บข้อมูลหัวข้อและวันแจ้งเตือน

// ตัวแปรแปลงหน่วยเวลา
const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

countDownForm.addEventListener('submit',updateCountDown)

function updateCountDown(e){
    e.preventDefault();
    countDownTitle= e.srcElement[0].value // srcElement เป็นการดึงข้อมูล form มาทั้ง element แต่จะถูกเก็บไว้ในรูป array และ . value เป็นการเอามาแค้่ค่า
    countDownDate=e.srcElement[1].value

    if(countDownTitle === ''){
        alert("ป้อนข้อมูลไม่ครบ")
    }else{
        saveCountDown={title:countDownTitle,date:countDownDate}
        localStorage.setItem("countDown",JSON.stringify(saveCountDown)) // JSON.stringify เป็นการแปลง JavaScript Object ให้อยู่ในรูปของ JSON String
        countdownValue = new Date(countDownDate).getTime()
        setupTime();
    }
}

function setupTime(){
    countDownActive=setInterval(()=>{
        // ตั้งเอาไว้ - ปัจจุบัน
        const now = new Date().getTime();
        const distance = countdownValue-now;
        const days = Math.floor(distance/day);
        const hours= Math.floor((distance%day)/hour)
        const minutes= Math.floor((distance%hour)/minute)
        const seconds= Math.floor((distance%minute)/second)
        inputContainer.hidden=true
        if(distance<0){
            //หมดเวลา
            countDownEl.hidden=true;
            completeEl.hidden=false
            completeInfoEl.textContent=`${countDownTitle} วันที่ ${countDownDate}`
            clearInterval(countDownActive)
        }else{
            countdownTitleEl.textContent=`${countDownTitle}`
            //นับถอยหลังเรื่อยๆ
            timeEl[0].textContent=`${days}`
            timeEl[1].textContent=`${hours}`
            timeEl[2].textContent=`${minutes}`
            timeEl[3].textContent=`${seconds}`
            countDownEl.hidden=false
            completeEl.hidden=true
        }
    },second)
}// ฟังก์ชัน setInterval ใช้เพื่อกำหนดให้โปรแกรมทำงานเป็นระยะจากช่วงเวลาที่กำหนด ยกตัวอย่างเช่น เราสามารถใช้มันเพื่อกำหนดให้โปรแกรมทำงานบางอย่างในทุก 5 วินาทีหรือในทุกๆ 1 นาทีได้ นี่เป็นรูปแบบการใช้งานของฟังก์ชัน setInterval ในภาษา JavaScript

function callDatainStore(){
    if(localStorage.getItem("countDown")){
        inputContainer.hidden=true
        saveCountDown = JSON.parse(localStorage.getItem('countDown'));
        countDownTitle=saveCountDown.title
        countDownDate=saveCountDown.date
        countdownValue=new Date(countDownDate).getTime()
        setupTime()
    }
}
callDatainStore()

countdownButtonEl.addEventListener('click',reset)
completeButtonEl.addEventListener('click',reset)
function reset(){
    localStorage.removeItem("countDown")
    countDownEl.hidden=true
    completeEl.hidden=true
    inputContainer.hidden=false
    clearInterval(countDownActive)
    countdownTitleEl=''
    countDownDate=''
}