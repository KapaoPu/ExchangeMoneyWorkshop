const input = document.querySelector('input');
const button = document.querySelector("button");

button.addEventListener('click',()=>{
    if(input.getAttribute("type") == "password"){
        input.setAttribute("type","text");
        button.innerText = "Hide password";
        button.classList.add("active");
    }else{
        input.setAttribute("type","password");
        button.innerText = "Show password";
        button.classList.remove("active");
    }
});