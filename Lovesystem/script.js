const icon = document.querySelector("i");
const image = document.querySelector(".container");

image.addEventListener("dblclick",()=>{
    icon.style.opacity=1;
    icon.classList.add("fa-bounce")
    setTimeout(()=>{
        icon.style.opacity=0;
    },2000);
})