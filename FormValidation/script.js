const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password1 = document.getElementById('password')
const password2 = document.getElementById('re-password')
form.addEventListener('submit',function(e){
    e.preventDefault()
    checkInput([username,email,password1,password2])
    checkPassword(password1,password2)
    checkInputLength(username,5,10)
    checkInputLength(password1,5,12)
    if (
        username.value !== '' &&
        email.value !== '' &&
        password1.value !== '' &&
        password2.value !== '' &&
        password1.value.trim() === password2.value.trim() &&
        username.value.length >= 5 &&
        username.value.length <= 10 &&
        password1.value.length >= 5 &&
        password1.value.length <= 10
      ) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'การลงทะเบียนเสร็จสิ้น',
        });
      }
})

function showerror(input,message){
    const formControl=input.parentElement; // เข้าถึง element ตัวแม่
    formControl.className='form-control error'
    const small = formControl.querySelector('small');
    small.innerText=message
    Swal.fire({
        icon: 'error',
        title: 'error',
        text: `${message}`
    })
}

function showsucces(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
}

function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showerror(input,`กรุณาป้อน ${getInputCase(input)}`)
        }else{
            showsucces(input)
        }         
    });
}

function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}

function checkPassword(password1,password2){
    if(password1.value.trim() != password2.value.trim()){
        showerror(password2,'รหัสผ่านไม่ตรงกัน')
    }
}
function checkInputLength(input,min,max){
    if(input.value.length<=min){
        showerror(input,`${getInputCase(input)} ต้องมากกว่า ${min} ตัวอักษร`)
    }else if(input.value.length>max){
        showerror(input,`${getInputCase(input)} ต้องไม่เกิน ${max} ตัวอักษร`)
    }else{
        showsucces(input)
    }
}