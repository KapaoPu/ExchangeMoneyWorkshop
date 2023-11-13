const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile_img');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text');

setTimeout(showContent, 2000);

function showContent(){
    header.innerHTML = `<img src="https://cdn.pixabay.com/photo/2023/11/04/07/57/owl-8364426_1280.jpg" alt="">`;
    title.innerHTML=`นกฮูก`;
    description.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque labore cupiditate, quas, rem magnam voluptas eum quaerat similique quisquam, ea quae commodi nobis? Consequatur commodi sed neque mollitia quasi.`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/86.jpg" alt="">`
    seller_name.innerHTML = `Tana`
    price.innerHTML = `ราคา 20,000 บาท`
    animated_bg.forEach(el=>el.classList.remove('animated_bg'))
    animated_text.forEach(el=>el.classList.remove('animated_text'))

}