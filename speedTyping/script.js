const wordEL=document.getElementById(`word`);
const textEl=document.getElementById(`text`);
const scoreEl=document.getElementById(`score`);
const timeEl=document.getElementById("time");

const btnLevelEl = document.getElementById('level-btn')
const settingEl = document.getElementById("settings")
const levelformEl = document.getElementById("level-form")
const levelEl = document.getElementById("level")
const gameoverEl = document.getElementById("gameover-container")

const words = ["หยกกี้","งูบินได้","yokky","หมู","ไก่"];

const savemode = localStorage.getItem("mode") !==null ? localStorage.getItem('mode'): 'medium';
let randomText;
let score=0;
let time=5;// easy => 15 , medium => 10 , hard => 5
let level = 'medium'
const timeInterval = setInterval(updateTime,1000)

function getRandomword(){
    return words[Math.floor(Math.random()*words.length)] //สุ่มตั้งแต่เลข 0 1 2
}// math floor ปัดขึ้น  // math random สุ่มเลข ตำกว่า 1 //ถ้า คูรด้วย เลข 10 จะสุ่มเลข 1 - 9

function displayWordToUI(){
    randomText = getRandomword();
    wordEL.innerText= randomText
    timeEl.innerHTML=time
}

textEl.addEventListener("input",(e)=>{
    const inputText = e.target.value;

    if(inputText == randomText){
        if(savemode == 'easy'){
            time+=5;
        }
        else if(savemode == 'medium'){
            time+=3;
        }
        else{
            time+= 2;
        }
        displayWordToUI();
        updateScore()
        e.target.value ="";
    }
})

function updateScore(){
    score+=10
    scoreEl.innerHTML=score;
}
function updateTime(){
    time--;
    timeEl.innerHTML=time
    if(time == 0 ){
        clearInterval(timeInterval)
        gameOver();
    }
}
function gameOver(){
    gameoverEl.innerHTML=`
    <h1>จบเกม</h1>
    <p>คะแนนของคุณ = ${score} คะแนน</p>
    <button onclick="location.reload()">เล่นอีกครั้ง</button>`
    gameoverEl.style.display="flex";
}
btnLevelEl.addEventListener('click',()=>{
    settingEl.classList.toggle('hide');
})
levelEl.addEventListener('change',(e)=>{
    level=e.target.value
    localStorage.setItem("mode",level);//Local Storage คือ การเก็บข้อมูลใส่ Local Storage แบบถาวร ข้อมูลจะหายไปก็ต่อเมื่อ clear Storage หรือกำหนดเวลาวันหมดอายุ
})
/*
localStorage.setItem(key, value) คือ การเก็บข้อมูลลงใน Local Storage
localStorage.getItem(key) คือ การเรียกใช้ข้อมูล key ของ Local Storage
localStorage.removeItem(key) คือ การลบข้อมูลที่ key เก็บไว้
localStorage.clear() คือ การลบข้อมูลทั้งหมดในโดเมน
*/
function startgame(){
    levelEl.value = savemode;

    if(savemode == 'easy'){
        time=20;
    }
    else if(savemode == 'medium'){
        time=15;
    }
    else{
        time= 10;
    }
    displayWordToUI()
}
startgame()
textEl.focus();