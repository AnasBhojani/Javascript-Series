let dateElement=document.getElementById("date");
let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

setInterval(()=>{

    let date=new Date();

/* TimeFormatting */
   hours.innerHTML=date.getHours().toString().padStart(2,'0');
   minutes.innerHTML=date.getMinutes().toString().padStart(2,'0');
    seconds.innerHTML=date.getSeconds().toString().padStart(2,"0");

/* DateFormatting */
let dayDate=date.getDate().toString().padStart(2,'0');

let year=date.getFullYear();

let DayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let MonthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
let DayName=DayNames[date.getDay()];
let MonthName=MonthNames[date.getMonth()];

dateElement.innerHTML=`${DayName}, ${dayDate}/${MonthName}/${year}`;
    
},1000);