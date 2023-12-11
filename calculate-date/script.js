const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click",()=>{ 
    const DBdate1 = date1.value;
    const DBdate2 = date2.value;

    const startDate = new Date(DBdate1);
    const endDate = new Date(DBdate2);

    // calculate difference between
    const time = Math.round(Math.abs(endDate - startDate)/86400000); // milliseconds
    // time => day 1 * 60 * 60 * 24 
    result.innerText = `ห่างกันทั้งหมด ${time} วัน`
});