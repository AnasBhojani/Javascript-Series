let display=document.querySelector(".display");
function appendValue(text){
    if(display.textContent==="0" || display.textContent==="Error" || display.textContent==="Infinity"){
        display.textContent=text
        return
    }
display.textContent= `${display.textContent}${text}`
    

}
function clearAll(){
   display.textContent="0"
}
function Equals(){
    
    try{

        if(display.textContent.includes("/0")){
            display.textContent="Infinity"
            return;

        }
        display.textContent=eval(display.textContent)
    }
    catch{
        display.textContent="Error"
    }
    

}