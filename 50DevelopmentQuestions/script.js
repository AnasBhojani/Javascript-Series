/* Return last element of an aaray */

/* function LastElement(array){
return array[array.length - 1];
}
let array=[1,2,3,4,5];
console.log(LastElement(array)); */


/* Find the combination of two arrays */

/* function CombineArray(array1,array2){
    return array1.concat(array2);
}
let array1=[1,2,3];
let array2=[4,5,6];
CombineArray(array1,array2);
console.log(CombineArray(array1,array2)); */



/* generate Random number between 1 and 10 */
/* 
function RandomNumber(number){
    return Math.floor(Math.random()*number) + 1;
}
let number=16;
console.log(RandomNumber(number)); */



/* function that return lenth of given objects */
/* function ObjectLength(object){
return Object.values(object).length;
}
let object={
    anas:{
        fatherName:"aneel",
        profession:"developer",
        age:25

    }
}
console.log(ObjectLength(object)); */

/* in an array filter out those element which have gender male */
/* 
function FilterMale(array){
return array.filter((item)=>item.gender==="male");
}

let array=[

    {
        name:"Anas Bhojani",
        gender:"male",
        age:20
    }
    ,
    {
        name:"Asia Bhojani",
        gender:"female",
        age:42
    }
    ,
    {
        name:"Aneel Bhojani",
        gender:"male",
        age:45
    }
]
console.log(FilterMale(array)); */

/* 
let arr=[1,3,5,7,9,11,13,15,17,19,17];
let max=Math.max(...arr);
console.log("The maximum number in array is:"+max);

/* Find the duplicate element in an array */
/* let arr1=[1,3,4,5,5,6,7,9,10]
for (let i=0;i<arr1.length;i++){
    for(let j=0; j<i;j++){
        if(arr1[i]===arr1[j]){
            console.log("The Duplicate Found is:"+arr1[i]);
        }
    }
}
 */ 

/* give an array of string and retur with new array with uppercase */

/* let SmallLetters=["anas","bhojani","ashar","umer"];

function UpperCaseArray(array){
    return array.map((elements)=>elements.toUpperCase());
}
let CapitalLetters=UpperCaseArray(SmallLetters);
console.log(CapitalLetters);



function DoubleValue(array){
    return array.map((items)=>items*2);
}
let numbers=[1,2,3,4,5];
console.log(DoubleValue(numbers)); */

/* let studets=[
    {
        Student1:{
            name:"anas",
            age:20,
            profession:"developer"
        },
        Student1:{
            name:"anas",
            age:20,
            profession:"developer"
        }
    },
{        Student2:{
            name:"anas",
            age:20,
            profession:"developer"
        }
    }
]
let keys=Object.keys(studets)
if(keys.length===0){
    console.log("no keys");
}
else{
    console.log("Student contains "+keys.length+ " keys");
}
 */

/*  let array=[1,2,3,4,5,4,56,5,7,10,9,9];

for(let i=0;i<array.length;i++){
    for(let j=0;j<i;j++){
        if(array[i]===array[j]){
            console.log("The Duplicate Found are:"+array[i]);
            
        }
    }
} */
/* let array=[1,2,2,3,4,5,6,8,9,9,10,10];
let duplicates=[];
let uniquearray=[];

for(let i=0;i<array.length;i++){
    for(let j=0;j<i;j++){
        if(array[i]===array[j]){
            duplicates.push(array[i])
        }
        if( (!uniquearray.includes(array[i]))){
uniquearray.push(array[i])
        }

    }
}
console.log("The Duplicates in The Array are: "+duplicates);
console.log("The Array Without The Duplictes:"+uniquearray); */


/* let arr=["anas","bhojani","umer","ashar",1];
let separatedString=arr.join("/");
console.log("The Separated String is: "+separatedString);
 */

/* Flatten the array */

/* let nestedArray=[1,2,3,[4,5,6],7,8,9,[10,11,12]];
let FlattenArray=nestedArray.flat().filter((item)=>{
    return item%2===0;
});
console.log("The Flattened Array is: "+FlattenArray); */


/* Separate numbers and strings from an array */
/* let checknum=[1,2,3,4,5,6,7,8,9,10,"anas","bhojani"];
let numbers=[];
let strings=[];

checknum.map((items)=>{
    if(typeof items==="number"){
        numbers.push(items);
    }
    else{
        strings.push(items);
    }
})
console.log("The Numbers in the Array are: "+numbers);
console.log("The Strings in the Array are: "+strings); */


/* let array=[1,2,3,4,5,6,7,7,8,9,10,10,11,12,13,14,15];


for(let i=0;i<array.length;i++){
    for(let j=0;j<i;j++){
        if(array[i]===array[j]){
            array.splice(i,1);
           
        }
    }
}
console.log("The Array Without Duplicates is: "+array); */

/* 
function Isprime(number){
    if(number<=1){
        console.log(number+ " is not prime number");
    }
    for (let i=2;i<Math.sqrt(number);i++){
        if(number%i===0){
            console.log(number+ " is not prime number");
            return false;
        }
    }
    console.log(+number+ " is a prime number");
    return true;
}
let number=7;
console.log(Isprime(number)); */

/* Palindrome Function */
/* let sentence="main hun anas bhojani";
let FinalResult= sentence.split(" ").map((item)=>{

    return item.split("").reverse().join("");
}).join(" ");
console.log("The Reverse String is: "+FinalResult); */



///* Sum of Numbers in an Array */
/* let array=[1,2,34,5,7,9,10,"6","98","80"];

let NumbersOnly=array.filter((item)=>{
    return typeof item==="number";
}).reduce((acc,current)=>{
    return acc + current
},0);
console.log("The Sum of Numbers in the Array is: "+NumbersOnly); */


/* Reverse a Number Function */
/* 
function ReverseNumber(number){
    return number.toString().split("").reverse().join("");
}
let number=123456789;
console.log("The Reverse of Number is: "+(Number(ReverseNumber(number))));

 */

/* Sort By Alphabetical Order */

/* function SortByAlphabeticalOrder(array){
    console.log(array.split("").sort().join(" "));
}
let array="poiuytrewqwsacvbg";
SortByAlphabeticalOrder(array); */


//* * get number of occurence of each element in an array */
/* let array=[1,2,3,4,5,2,3,6,7,8,9,10,9];
function CountOccurences(array){
    let count={};
    array.forEach(element=> {
        count[element]=(count[element]||0)+1;
    });
    console.log("The Occurence of Each Element in the Array is: ");
    for (let key in count){
        console.log(key + ": " + count[key]);
    }
}
CountOccurences(array); */ 

/* et string="anas bhojani";
function FirstCapitalLetter(string){
    return string.split(" ").map((item)=>{
        return item.charAt(0).toUpperCase() 
    }).join(" ");
}
console.log("The First Capital Letter of Each Word is: " + FirstCapitalLetter(string));
 
let string1 ="Ashar Umer";
function SmallLetter(string1){
    return string1.split(" ").map((item)=>{
        return item.charAt(0).toLowerCase() + item.slice(1);
    }).join(" ");
}
console.log("The Small Letter of Each Word is: " + SmallLetter(string1));

 */

/* unction CountVowels(string){
    let vowels="aeiouAEIOU";
    let count=0;
    for(let i=0;i<string.length;i++){
        if(vowels.includes(string.charAt(i))){
            count++;
        }
        
    }
    console.log("The Vowels in the String is: " + string.split("").filter((char)=> vowels.includes(char)).sort().join(", ") + " and the count is: " + count);
    return count;
}
let string="Anas Bhojani";
console.log(CountVowels(string));
 */
 
/* function GetArrayElements(array,start,end){
    if(start<0 || end>array.length ||start>end){
        return "Invalid Range"
    }
    else{
        return array.slice(start,end+1)
    }
}
let array=[1,2,3,4,5,6,7,8,9,10];


let start=1;
let end=12;
console.log("The Elements in the Array from " + start + " to " + end + " are: " + GetArrayElements(array,start,end)); */


/* let array=[1,2,3,4,5,6,7,8,9,10];

function shuffleArray(array){
for(let i=array.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]]
}
return array;
}
let shuffle=shuffleArray(array.slice());
console.log("The Original Array is: " + array);
console.log("The Shuffled Array is: " + shuffle);



let list=[1,2,3,4,5,6,7,8,9,10,3,4,5,67,8,9,10,11,12,13,14,15,16,17,18,19,20,20];

function OccurenceOfelements(list){
    let count={};
    list.forEach(element => {
        count[element]=(count[element]||0)+1;
    });
   

    for (let key in count){
        console.log("Number Of Occurence Of "+Number(key)+ " is :"+ count[key]);
    }
}
console.log(OccurenceOfelements(list)); */
