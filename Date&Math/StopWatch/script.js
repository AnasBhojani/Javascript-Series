
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let milliseconds=document.getElementById("milliseconds");

let ms=0,s=0,m=0;



let interval=null;

function updatetime(){

interval=setInterval(()=>{
  ms++;
if(ms===100){
    ms=0;
    s++;

    if(s===60){
        s=0;
        m++;
    }
    if(m===60){
        m=0;
    }
  
}

milliseconds.innerHTML=ms;
seconds.innerHTML=s;
minutes.innerHTML=m;

},10)

}

start.addEventListener("click",()=>{
if(!interval){
    updatetime()
}
});
stop.addEventListener("click",()=>{

    clearInterval(interval);
    interval=null;

});
reset.addEventListener("click",()=>{
  
    interval=null;
    ms=s=m=0;

    milliseconds.innerHTML=0;
    seconds.innerHTML=0;
    minutes.innerHTML=0;
});