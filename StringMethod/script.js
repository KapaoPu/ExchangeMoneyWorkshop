let text = "Tanabordee";
let text2 = "studio";
let result = text.concat(text2);
console.log(result);
console.log(text.length);
console.log(text.indexOf("e"));
console.log(text.lastIndexOf("e"));


// substring
text = "Kongruksiam"; // 0 - 3
console.log(text[0]);
console.log(text.substring(0,4));

// split เป็น method ในการแบ่ง string ออกจากกัน
let url = "www.example.com"
let urlarr = url.split(".");
console.log(urlarr);
let name = "นาย|นาง|นางสาว|เด็กชาย|เด็กหญิง";
const word = name.split("|");
console.log(word);

//แปลงข้อความเป็น ตัวพิมพ์ใหญ่-ตัวพิมพ์เล็ก
text = "TesadwWSDascBef";
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// include เป็นการหาตัวอักษรว่ามีไหม return เป็น true false
let food = "ต้มผัดแกงทอด";
console.log(food.includes("ทอด")); 

// ทำซ้ำข้อความโดยไม่ใช่ลูป
text = "Javascript \n";
console.log(text.repeat(3)); // ทำซ้ำ3ครั้ง 

// เปรียบเทียบคำขึ้นต้นและลงท้าย
if(url.startsWith("www")){
    console.log("เริ่มด้วย WWW");
};
if(url.endsWith("com")){
    console.log("ลงท้ายด้วย com");
};

// แทนที่ข้อความ replace แทนที่ข้อความตัวเดียว replaceAll แทนที่ทั้งหมด
text = "สวัสดีปีใหม่ 2566 , วันสงกรานต์ 2566";
console.log(text.replaceAll("2566","2567"));

//CharAt อ้างอิงถึง ตัวอักษรใน textch
const textCh = "kong"
console.log(textCh.charAt(0));
console.log(textCh.charAt(1));

//trim ลบช่องว่าง ถ้าลบช่องว่างด้านซ้าย trimStart() ถ้าลบช่องว่างด้านขวา trimEnd()
const textTrim = " yokky "
console.log(textTrim.trim())