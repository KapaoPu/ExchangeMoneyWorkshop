// operand operator

// + - x

// 0 - 9

const calculatorDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button'); //array
const clearBtn = document.getElementById('clear-btn');

const calculate = {
    "/":(firstNumber,secondNumber)=>secondNumber>0? firstNumber/secondNumber : "error",
    "*":(firstNumber,secondNumber)=> firstNumber * secondNumber,
    "+":(firstNumber,secondNumber)=> firstNumber + secondNumber,
    "-":(firstNumber,secondNumber)=> firstNumber - secondNumber,
    "=":(firstNumber,secondNumber)=> secondNumber
}

let firstValue = 0; //ตัวเลขที่ 1
let operatorValue = '';// เก็บตัวดำเนินการ
let waitForNext = false; // เก็บสถานะของตัวเลขและตัวดำเนินการ

function setnumbervalue(number){
    if(waitForNext){
        calculatorDisplay.textContent=number
        waitForNext=false
    }
    else{
        let displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue+number;
        // 0 => 7
        // 5 => 57
    }
}
function callOperator(operator){
    const currentValue = Number(calculatorDisplay.textContent);
    if(operatorValue && waitForNext){
        operatorValue=operator;
        return;
    }
    if(!firstValue){
        firstValue = currentValue;// ค่าเริ่มต้น
    }else{
        const result = calculate[operatorValue](firstValue,currentValue)
        calculatorDisplay.textContent=result;
        firstValue=result
        if (firstValue === 'error'){
            resetAll();
        }
    }
    operatorValue=operator
    waitForNext=true
}

inputBtn.forEach((input)=>{
    // ปุ่มตัวเลข 0-9 
    // เช็คค่าความยาว class list ถ้าเป็น 0 แปลว่าเป็นตัวเลข เนื่องจากตัวเลขไม่มีการกำหนด class ความยาวเลยเป็น 0 
    if(input.classList.length  === 0){
        input.addEventListener('click',()=>setnumbervalue(input.value))
    } // ()=> เป็นการส่งค่าแต่ละตัวไปที่ argument โดย input.value เป็นการเอาค่า value ที่ เรากำหนด ส่งไป และ ส่งไปที่พารามิเตอร์ number
    else if(input.classList.contains("operator")){
        input.addEventListener('click',()=>callOperator(input.value))
    }
    else if(input.classList.contains("decimal")){
        input.addEventListener("click",()=>addDecimal())
    }
})
clearBtn.addEventListener('click',()=>resetAll())
function resetAll(){
    firstValue=0;
    operatorValue='';
    waitForNext=false
    calculatorDisplay.textContent = '0'
}

function addDecimal(){
    if(waitForNext) return;
    if(!calculatorDisplay.textContent.includes(".")){
        calculatorDisplay.textContent=`${calculatorDisplay.textContent}.`
    }
}// includes เป็นการเช็ค string