// ข้อมูลสกุลเงิน
const currency_one = document.getElementById("currency-one")
const currency_two = document.getElementById("currency-two")
//ข้อมูลตัวเลข
const amount_one = document.getElementById("amount-one")
const amount_two = document.getElementById("amount-two")
//ปุ่มและตัวเปลี่ยนเลข
const rateText = document.getElementById("rate")
const swap = document.getElementById("btn")

currency_one.addEventListener("change",calculateMoney)
currency_two.addEventListener("change",calculateMoney)
amount_one.addEventListener("input",calculateMoney)
amount_two.addEventListener("input",calculateMoney)
function calculateMoney(){
    // รับค่า
    const one = currency_one.value;
    const two = currency_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/277e73999986c054ab010bd0/latest/${one}`).then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[two];
        rateText.innerText=`1 ${one} = ${rate} ${two}`;
        amount_two.value =(amount_one.value*rate).toFixed(2);// toFixed เป็นการให้แสดงค่าแค่ 2 ตำแหน่ง
    })// fetch เป็นการเรียกใช้งาน api //โดย api ตัวนี้ return เป็น json
}
swap.addEventListener("click",()=>{
    // USD => THB || THB => USD
    // TEMP => USD || THB = TEMP (USD)
    const temp = currency_one.value;  // สกุลเงินต้นทาง
    currency_one.value = currency_two.value
    currency_two.value = temp
    calculateMoney();//สั่งให้คำนวณ สกุลเงินใหม่
})

calculateMoney()