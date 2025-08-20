/* let AdminDate=new Date('2025-07-5');


let UserDate=new Date('2025-07-15');

let diff=UserDate - AdminDate;
let GettDays=diff/1000/60/60/24;

if(GettDays>30){
    console.log("The Form Is Expired You are Not able to submit");
}else{
    console.log("Congrats You're Eligible To Submit Form");
}


 */

 

/* function GettingDifference(start,end){
    let startDate=new Date(start);
    let endDate=new Date(end);

    let Diff= endDate - startDate;

    let Totalseconds=Math.floor(Diff/1000);
    let seconds= Totalseconds % 60;


    let TotalMinutes=Math.floor(Totalseconds/60);
    let Minutes=TotalMinutes % 60;

    let TotalHours=Math.floor(TotalMinutes/60);
    let Hours=TotalHours % 60;

    let TotalDays=Math.floor(TotalHours/24);
    let Days=TotalDays % 24;

    let Months=Math.floor(TotalDays/24)%12;

    let Years=Math.floor(TotalDays/365);
    

     return `${Years} Years ${Months} Months ${Days} Days ${Hours} Hours ${Minutes} Minutes ${seconds} Seconds` 
}

let StartDate='2024-07-24T12:50:34Z';
let EndDate='2025-03-30T07:54:23Z';
let Difference=GettingDifference(StartDate,EndDate);
console.log(Difference); 

 */
let navbar=document.querySelector('nav');

window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
})
