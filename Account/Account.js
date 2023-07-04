// อ้างอิง element ใน index.html
const balance = document.getElementById("balance")
const money_plus = document.getElementById("money-plus")
const money_minnus = document.getElementById("money-minus")
const list = document.getElementById("list")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")

let transaction = [];
function init(){
    list.innerHTML = "";
    transaction.forEach(addDataToList);// loop ดึงข้อมูลมาทีละตัว
    calcualteMoney()
}
function addDataToList(transaction){
    const symbol = transaction.amount < 0 ?"-":"+"; // ถ้าเป็นจริงเขียนต่อท้าย ? ถ้าเป็นเท็จเขียนหลัง colon
    const status = transaction.amount < 0 ?"minus":"plus";
    const item = document.createElement("li");
    result = formatNumber(Math.abs(transaction.amount))
    item.classList.add(status);//การ add class ใน list
    // item.innerHTML="ค่าซ่อมรถ <span> - ฿400</span><button class='delete-btn'>X</button>";
    item.innerHTML=`${transaction.text}<span> ${symbol} ฿${result}</span><button class='delete-btn' onclick="removeData(${transaction.id})">X</button>`;
    list.appendChild(item)
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function calcualteMoney(){

    const amounts = transaction.map(transaction=>transaction.amount);// ดึงข้อมูลในarray ทีละตัวมาเก็บไว้ในตัวแปร
    // คำนวณยอดคงเหลือ
    const total =amounts.reduce((result,item)=>(result+=item),0).toFixed(2)
    // คำนวณรายรับ
    const income = amounts.filter(item=>item >0).reduce((result,item)=>(result+=item),0).toFixed(2)
    // คำนวณรายจ่าย
    const expense = (amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2)
    
    //แสดงผลทางจอภาพ
    balance.innerText = `฿`+formatNumber(total);
    money_plus.innerText = `฿`+formatNumber(income)
    money_minnus.innerText = `฿`+formatNumber(expense)
}
function autoID(){
    return Math.floor(Math.random()*1000000)// math.floor คือการคื่นค่าตัวเลขเป็นตัวเต็มบวกหรือลบ
    //การใช้ math.random เป็นการสุ่มเลขตั้งแต่ 0 จนถึงก่อน 1
}

function removeData(id){
    transaction = transaction.filter(transaction=>transaction.id !==id)
    init()
}// ถ้าสมมุติโยนเลขidเข้ามา มันก็จะไปกรองโดยการดึงค่ามาทีละตัวแล้วเช็คว่าตัวไหนที่ไม่ใช่เลขที่ id โยนมาให้กลับไปเก็บค่าไว้เหมือนเดิม
// 1 , 2 , 3 => id = 1  

function addTransaction(e){
    e.preventDefault()// ทำให้เว็ปไม่โหลดใหม่เองถ้าใช้ function นี้
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("กรุณาป้อนข้อมูลให้ครบ")
    }// trim ใช้ลบช่องว่างของ string
    else{
        const data = {
            id:autoID(),
            text:text.value,
            amount:+amount.value//เพิ่ม + ไปข้างหน้าจะกลายเป็น int
        }
        transaction.push(data)
        addDataToList(data)
        calcualteMoney()
        text.value="";
        amount.value="";
    }
}
form.addEventListener("submit",addTransaction)
init()