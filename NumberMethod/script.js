//number (integer,float)

let value = "128%";
// isNan = is not a number ใช้เช็คว่าค่านั้นเป็นตัวเลขหรือไม่
console.log(isNaN(value));

// เป็นการเช็ตว่าเป็น intger หรือ ไม่
age = 128.05;
if(Number.isInteger(age)){
    console.log("อายุถูกต้อง");
}else{
    console.log("อายุไม่ถูกต้อง");
};

// แปลง string => integer
let input1 = "50";
let input2 = "100";
let result = (+input1) + (+input2); // แบบที่ 1 
result = Number.parseInt(input1) + Number.parseInt(input2); // แบบที่ 2
console.log(result);

//แปลง float => integer จะไม่นำทศนิยมมาคิด
input1 = 90.99;
input2 = 10.99;
result = Number.parseInt(input1) + Number.parseInt(input2);
console.log(result);

//แปลง string => float
input1 =  "90.99";
input2 = "10.99";
result = Number.parseFloat(input1) + Number.parseFloat(input2);
console.log(result);
console.log(result.toFixed(2)); // เป็นการปัดทศนิยมให่้เหลือ 2 ตำแหน่ง

// แปลง number => string
console.log(result.toString());

//number => สัญกรณ์วิทยาศาสตร์ 2 คือจำนวนทศนิยม
value = 500
console.log(value.toExponential(2));