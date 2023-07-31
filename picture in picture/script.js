const videoEl = document.getElementById('video')
const btnRequest = document.getElementById('requestbtn')
const btnShare = document.getElementById('sharebtn')


btnRequest.addEventListener('click',selectMediaStream)
btnShare.addEventListener('click',async ()=>{
    btnShare.disabled=true;
    await videoEl.requestPictureInPicture();
    btnShare.disabled=false;
})

async function selectMediaStream(){
    try{   
        const mediaStream = await navigator.mediaDevices.getDisplayMedia() // ดึงข้อมูลหน้าจอออกมา
        videoEl.srcObject=mediaStream // resorce object = mediastream
        videoEl.onloadedmetadata=()=>{
            videoEl.play()
        } // load video เข้ามาแล้วเล่นเลย
    }catch (error){
        console.log(error)
    }
}