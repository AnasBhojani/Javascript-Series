let StartDate='2024-07-24T12:50:34Z';
let EndDate='2025-03-30T7:54:23Z';

function GettingDifference(start,end){
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

    let TotalMonths=Math.floor(TotalDays/30);
    let Months=TotalMonths % 30;

    let TotalYears=Math.floor(TotalMonths/12);
    

     return `${TotalYears} Years ${Months} Months ${Days} Days ${Hours} Hours ${Minutes} Minutes ${seconds} Seconds` 
}
let Difference=GettingDifference(StartDate,EndDate);
console.log(Difference);