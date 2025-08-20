/* const Movies=[
     {
        "title":"DDLJ",
        "releaseYear":1995,
        "Hero":"Shah Rukh Khan",
    },
     {
        "title":"Ready",
        "releaseYear":2011,
        "Hero":"Salman Khan",

    },
    {
        
        "title":"Bang Bang",
        "releaseYear":2014,
        "Hero":"Hrithik Roshan",

    },
    {
        
        "title":"Kabir Singh",
        "releaseYear":2019,
        "Hero":"Shahid Kapoor",

    },
    {
        "id":4,
        "title":"Kick",
        "releaseYear":2014,
        "Hero":"Salman Khan",
    }
]

let movie=Movies.filter((movie)=>{
    return movie.Hero.toLowerCase()==="salman khan"&& movie.releaseYear>2011;
})
let movie1=[...Movies]
.filter((movie)=>{
    return movie.Hero.toLowerCase()==="salman khan"&& movie.releaseYear>2011;
}).map((movie)=>{
    return {
        Hero:movie.Hero,
        title:movie.title,
        releaseYear:movie.releaseYear,
        id:movie.id
    }
})
console.log(movie);
console.log(movie1);

 */

/* function DiferenceInDates(start,end){

let startingDate=luxon.DateTime.fromISO(start);
let endingDate=luxon.DateTime.fromISO(end);
let diff=endingDate.diff(startingDate,["years","months","days","hours","minutes","seconds"]);

return `${diff.years} Years ${diff.months} Months ${diff.days} Days ${diff.hours} Hours ${diff.minutes} Minutes ${diff.seconds} Seconds`

}
let start="2024-11-23T12:56:56Z"
let end="2026-01-23T11:51:34Z"
let TakingDiff=DiferenceInDates(start,end);
console.log(TakingDiff); */

/* let luxon=require("luxon");
function CalculateBirthDay(birthDate){
let NowDate=luxon.DateTime.now();


 const birthdate = luxon.DateTime.fromFormat(birthDate, "yyyy-MMM-dd");

let difference=birthdate.diff(NowDate,["years","months","days","hours","minutes","seconds"]);

return `${difference.years} Years ${difference.months} Months ${difference.days} Dayss ${difference.hours} Hours ${difference.minutes} Minutes ${difference.seconds} Seconds`
}
let birth="2026-nov-03"
let BirthDay=CalculateBirthDay(birth);
console.log(BirthDay);




let numberOfDays=9;
let date=new Date("2024-11-23T12:56:56Z");

let GetTimeStamps=date.getTime() + numberOfDays *24*60*60*1000;

let newDate=new Date(GetTimeStamps);
console.log(newDate);

 */


let dateOfBirth=new Date("2004-07-31");
let CurrentDate=new Date()


let YearsDiff=CurrentDate.getFullYear() - dateOfBirth.getFullYear();
let MonthDiff=CurrentDate.getMonth() - dateOfBirth.getMonth();
let DaysDiff=CurrentDate.getDay() - dateOfBirth.getDay();



if(MonthDiff<0 || (MonthDiff===0 && DaysDiff<0)){
    YearsDiff--;
}
console.log(YearsDiff);


//Into User-Friendly Style Date

let date="2024-02-23"
function FormattedDate(dateStr){
let date=new Date(dateStr);
let formattedDate=date.toLocaleDateString("ur-Pk",{
 
   dateStyle:"full"
    /* day:"2-digit",
    month:"long",
   
    year:"numeric" */

});
return formattedDate


}

let FormDate=FormattedDate(date);
console.log(FormDate);
