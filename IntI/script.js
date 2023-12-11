const amount = document.getElementById("amount");
const output = document.getElementById("output");

amount.addEventListener("input",(e)=>{
    const number = e.target.value;
    const result = Intl.NumberFormat("en",{notation:"compact"}).format(number);
    output.innerText = result
});