let Name=document.getElementById("name");
let Email=document.getElementById("emailField");
let password=document.getElementById("password");
let nameError=document.getElementById("nameError");
let emailError=document.getElementById("emailError");
let passwordError=document.getElementById("passwordError");

Name.addEventListener("input",(event)=>{
    let value=event.target.value;
    if(value.length<3){
       
        nameError.textContent="Name Must Be Greater Than 3 Alphabets"
        nameError.style.color="red"
    }
    else{
        
            nameError.textContent="Now You're Matching Given Instructions"
        nameError.style.color="green"

    setTimeout(()=>{
        nameError.textContent=""
    },2000)
       
        
       
       
    }
   
    
})

Email.addEventListener("input",(event)=>{
    let emailvalue=event.target.value;
    if(!emailvalue.includes('@') || !emailvalue.includes('.')){
        console.log(emailvalue);
        emailError.textContent="Email is invalid";
        emailError.style.color="red";
    }
    else{
        emailError.textContent="Email is valid";
        emailError.style.color="green";

        /* setTimeout(()=>{
            emailError.textContent=""

        },2000) */
    }

})



password.addEventListener("input",(event)=>{
    let PasswordValue=event.target.value;
    const hasNumber=/\d/.test(PasswordValue)
    const SpecialCharacters=/[!@$%^&*()<>?]/.test(PasswordValue);


    if(PasswordValue.length<8 || !hasNumber ||!SpecialCharacters){
        
        passwordError.textContent="The Password must be of 8 digits And Must contains Special Characters and must be in Numbers"
        passwordError.style.color="red"
    }
    else{
        passwordError.textContent="Nice You're Following Instructions properly";
        passwordError.style.color="green";

        setTimeout(()=>{
            passwordError.textContent=""
        },2000)

        

    }
   
})