const category = document.querySelectorAll('.category');

window.addEventListener('scroll', showCategory)

function showCategory(){
    const calculateHeight = window.innerHeight-50;

    category.forEach(category=>{
        const topposition = category.getBoundingClientRect().top;
        if(topposition<calculateHeight){
            category.classList.add('active')
        }else{
            category.classList.remove('active')
        }
    })
}