  let button=document.getElementById("btn");
let PasswordInput=document.getElementById("Password");
let ErrorMsg=document.getElementById("ErrorMessage")

 button.addEventListener("click",()=>{
    if(PasswordInput.value.trim()===""){
ErrorMsg.innerHTML="Pleasee Enter The Password First Nothing To show";
ErrorMsg.style.color="red"
    }
    else{
let IsPassword=PasswordInput.type==='password';
    PasswordInput.type=IsPassword ? 'text' : 'password';
    button.innerText=IsPassword ? 'Hidee' : 'Showw';
    ErrorMsg.innerHTML=""
    }
    
})  
 



 