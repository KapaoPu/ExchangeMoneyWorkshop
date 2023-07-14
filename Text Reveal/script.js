const content = document.querySelectorAll('.content');// return เป็น array

document.addEventListener('scroll',showText);

function showText(){
    content.forEach((section)=>{
        const imgEl = section.querySelector('img')
        const TextEl = section.querySelector('.text')

        const scrollPos=window.pageYOffset; //ดึงจำนวน scroll ออกมา
        // EX ภาพ 500 px + ความสูง 100 / ส่วน = 50
        // 502 => แสดงข้อความ
        const textPos = imgEl.offsetTop + imgEl.offsetHeight /100
        if(scrollPos>textPos){
            //แสดงเนื้อหาออกมา
            TextEl.classList.add('show-reveal')
        }
        else{
            //ปิดการแสดงเนื่้อหา
            TextEl.classList.remove('show-reveal')
        }
    });
}