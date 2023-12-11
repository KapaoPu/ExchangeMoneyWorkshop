const setting = document.getElementById("setting");
const text = document.querySelector("p");
const reset = document.getElementById("reset");
const body = document.querySelector("body");
// true => กลางคืน
// false => กลางวัน

setting.addEventListener("change",()=>{
    // save setting in local storage
    localStorage.setItem("night-mode",setting.checked);
    loadTheme();
});
function loadTheme(){   
    const LCsetting  = JSON.parse(localStorage.getItem("night-mode"))
    setting.checked = LCsetting
    if(LCsetting){
        text.innerText = "โหมดกลางคืน"
        body.style.backgroundColor = "black";
        body.style.color = "white";
        body.style.transition = "1s";
    }else{
        text.innerText = "โหมดกลางวัน"
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.transition = "1s";
    }
}
reset.addEventListener("click",()=>{
    localStorage.clear()
    loadTheme()
})
loadTheme();