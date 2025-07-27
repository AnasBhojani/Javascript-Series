 let Container=document.querySelector('.container');
let timerValue=document.querySelector('.timer');
let targetValue=document.querySelector('.target');
let scoreValue=document.querySelector('.score');
let timer=7;
let numberOfCircles=30;
let target;

let sv=0;
for(let i=1;i<=numberOfCircles;i++){
    let box=document.createElement('div');
    box.classList.add('box');
    let number=Math.ceil(Math.random()*10);
    box.innerHTML=number;
    Container.appendChild(box);
}

GenerateRandomNumber();
targetValue.innerHTML = `Target: ${target}`;
scoreValue.innerHTML = `Score: ${sv}`;


let interval=setInterval(()=>{
    if(timer<=0){
        clearInterval(interval);
       timerValue.innerHTML=`Time's Up!`;
      

       let newElem=document.createElement('div');
       newElem.className="gameOver";
       newElem.innerHTML=`<h2>Game Over !</h2> Your Score is: ${sv}`;
       document.body.appendChild(newElem);
       Container.innerHTML="";
       return;
}
 
timer--;
timerValue.innerHTML= `Timer: ${timer} sec`;


},1000);
function GenerateRandomNumber(){
    target= Math.ceil(Math.random()*10);
   
}

Container.addEventListener('click',(event)=>{
if(event.target.classList.contains('box')){
    let ClickNum=Number(event.target.innerHTML);
   
    if(ClickNum===target){
       sv += 10;

    scoreValue.innerHTML=`Score: ${sv}`;
GenerateRandomNumber();
targetValue.innerHTML=`Target : ${target}`;
      

}
else if(ClickNum!=target){
    sv-=10;
    scoreValue.innerHTML=`Score: ${sv}`;
}
}}); 
