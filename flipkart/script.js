let MainContainer=document.querySelector(".parent");
let close=document.getElementById("close");
detailsContainer=document.querySelector(".parent2");
MainContainer.addEventListener("click",(event)=>{
if(event.target.classList.contains("buttonsec")){
    
   
        detailsContainer.style.display="grid";
        MainContainer.style.opacity="0.2";
        MainContainer.style.transition="0.5s";
      
       
    
    close.addEventListener("click",()=>{
        detailsContainer.style.display="none";
         MainContainer.style.opacity="1";
    });

}
}

)
