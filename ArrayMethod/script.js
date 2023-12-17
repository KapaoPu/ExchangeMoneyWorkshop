
let tools = ["HTML5","CSS3","JavaScript","Bootstrap","Nodejs","Javascript","Javascript","Angular"];

// loop array methods e คือ ตัวที่อยู่ใน array 
tools.forEach((e,index)=>{
    console.log(e);
    console.log(index+1);
});

// method join แยกสมาชิกแต่ละตัวด้วย | 
let result = tools.join("/");
console.log(result);

let url = ["www","example","com"];
let urlResult = url.join(".");
console.log(urlResult);


// index of , last index of
console.log(tools.indexOf("Javascript")); // ค้น ว่ามีตัวนี้อยู่ที่ index เท่าไหร่ (ค่นเจอครั้งแรกบอก index เลย)
console.log(tools.lastIndexOf("Javascript")); // ค้น ว่ามีตัวนี้อยู่ที่ index เท่าไหร่ (ค่นเจอท้าย index เลย)

// sort , reverse
tools.sort(); // เรียงจาก A - Z
console.log(tools);
tools.reverse();
console.log(tools); // Reverse กลับ

// includes เป็นการเช็คว่ามีตัวนั้นอยู่ใน Array ไหม
console.log(tools.includes("Nodejs"));
if(tools.includes("Nodejs")){
    console.log("มีการใช้งาน Nodejs");
}else{
    console.log("ไม่พบข้อมูล");
};

// concat เป็นการเชื่อม 2 array เข้่าด้วยกัน
let newtools = ["React","Vue","Angular"];
let web = tools.concat(newtools);
console.log(web);

//fill เป็นการแทนที่สมาชิกใน array 
web.fill("PHP",0,3);// ให้แทนที่ index ที่ 0 จนถึงก่อน index ที่ 3
console.log(web);

//push , pop จัดการสมาชิดท้ายสุด
tools.push("Kotlin");// push เป็นการเพิ่มค่า array ไปข้างหลัง
console.log(tools);

tools.pop();
console.log(tools); // pop เป็นการลบค่าท้ายสุด array

// shift , unshift จัดการสมาชิกหน้าสุด 
tools.unshift("Ruby");
console.log(tools); // unshift เป็นการเพิ่มสมาชิกตัวใหม่ไปหน้าสุด array
tools.shift();
console.log(tools); // shift เป็นการลบสมาชิกตัวหน้าสุดใน array

// slice เป็นการคัดลอก array tools (สมารถเลื่อกช่วงที่จะ coppy ได้)
let coppyTools = tools.slice(0,3); // 0 - 2 
console.log(coppyTools);

// splice เมื่อคัดลอกจะทำการลบสิ่งที่คัดลอกมาจาก array หลัก
coppyTools = tools.splice(0,3);
console.log(tools);
console.log(coppyTools);