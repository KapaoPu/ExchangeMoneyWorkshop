const count = 10
const apikey= 'qUGTGEEDd1Qj1VO3dbGdTPBnoSOfinOE62-YfhNl-gU'
const apiurl=`https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`

const imageContainer = document.getElementById('img-container')
let photoArrays = [];
async function getPhotos(){
    try{
        const response = await fetch(apiurl);
        photoArrays=await response.json()
        displayImage()
    }catch(err){
        console.log(err);
    }
}
function displayImage(){
    photoArrays.forEach((photo)=>{
        const item =  document.createElement('a'); //สร้าง tag a
        item.setAttribute('href',photo.links.html) // ใส้ลิ้งใน hreft  EX. href = '' to href = 'photo.link.html'
        item.setAttribute('target','_blank') // ใส่ _blank ลงไปใน target EX. target = '_blank'
        const img = document.createElement('img')
        img.setAttribute('src',photo.urls.regular)
        img.setAttribute('title',photo.alt_description)
        img.setAttribute('alt',photo.alt_description)

        item.appendChild(img);
        imageContainer.appendChild(item)
    })
}
getPhotos()

window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
        
        getPhotos()
    }
})