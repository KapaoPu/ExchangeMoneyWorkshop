const rating = document.querySelectorAll("i");
const result = document.getElementById("result");

rating.forEach((star,selectindex)=>{
    console.log(star,selectindex)
    star.addEventListener("click",()=>{
        rating.forEach((star,choices)=>{
            if(selectindex>=choices){
                star.classList.add("select");
            }else{
                star.classList.remove("select");
            }
        })
        result.innerText = `ผลการประเมิน ${selectindex+1} /5`
    })
})

// 0 , 0-4