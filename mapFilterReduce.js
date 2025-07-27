/* let Employees=[
    {
PermenantEmployees:{
Id:101,
Name:"Anas Bhojani",
Depart:"Development",
PermSalary:100000,
Bonus:0.20
},

TemporarayEmployee:{
Id:104,
Name:"Umer Azam",
Depart:"Finance",
TempSalary:30000,
Bonus:0.20
}
}




];

let Permenant=Employees.map( (perm) => 
console.log(` \tThe Permenant Employee Details:\n
    The ID Of Employee is=${perm.PermenantEmployees.Id},
    The Name Of Employee Is=${perm.PermenantEmployees.Name},
    The Department Of Employee Is=${perm.PermenantEmployees.Depart},
     The Salary Of Employee Is=${perm.PermenantEmployees.PermSalary},
    Your Annual Bonus Will Be=${(perm.PermenantEmployees.Bonus*perm.PermenantEmployees.PermSalary)}
    Your Final Saalary Will Be=${perm.PermenantEmployees.PermSalary+perm.PermenantEmployees.Bonus*perm.PermenantEmployees.PermSalary}
    
    `)
)
console.log(Permenant);
 */

/* let Movies=[

    {
        id:1, MovieName:"Housefull 3",Release:2016,HeroCasting:"Akshay Kumar"
    }
,
    {
        id:2, MovieName:"Main Tera Hero",Release:2014,HeroCasting:"Varun Dhawan"
    }

    ,
    {
        id:3, MovieName:"Jawaan",Release:2024,HeroCasting:"Shahrukh Khan"
    }

     ,
    {
        id:4, MovieName:"Kick",Release:2014,HeroCasting:"Salman Khan"
    }
     ,
    {
        id:5, MovieName:"Student Of The Year",Release:2012,HeroCasting:"Sidhart Malhotra"
    }
     ,
    {
        id:6, MovieName:"Dilwale",Release:2024,HeroCasting:"Shahrukh Khan"
    }
]
let UserSearch=Movies.filter((hero) =>{

    return (hero.HeroCasting).toLowerCase()=="shahrukh khan"
});
console.log(UserSearch);
 */

let StudentInfo=[
    {
        name:"Anas Bhojani",ID:1,Section:"C",subjects:5,Marks:{
Physics:89,
Science:90,
English:76,
Islamiat:86,
Urdu:65
        },
        
    },

    {
        name:"Umer Azam",ID:2,Section:"A",subjects:5,Marks:{
Physics:79,
Science:80,
English:86,
Islamiat:66,
Urdu:95
        },
        
    },


    {
        name:"Qasim Sheikh",ID:3,Section:"C",subjects:5,Marks:{
Physics:79,
Science:90,
English:86,
Islamiat:56,
Urdu:85
        },
        
    },

    {
        name:"Habib Memon",ID:4,Section:"B",subjects:5,Marks:{
Physics:89,
Science:80,
English:66,
Islamiat:86,
Urdu:65
        },
        
    }
]


let Students=StudentInfo.map( (info)=>{

  let student={
    ID:info.ID,
    Name:info.name,
    Section:info.Section,
    Subjects:info.subjects,
    TotalMarks:info.Marks.English+info.Marks.Islamiat+info.Marks.Physics+info.Marks.Science+info.Marks.Urdu
  }
  maxpossible=student.Subjects*100;
  percent=(student.TotalMarks/maxpossible)*100

  console.log(`\n\t
    Student ID is=${student.ID}
    Student Name=${student.Name}
    Student Section=${student.Section}
    Numbers Of Subjects =${student.Subjects}
    Total Numbers Achieved=${student.TotalMarks}
    Percentage Achieved By ${student.Name} is ${percent} %\n\n\n`)

  if(percent>80){
    console.log(`Congrats ${student.Name} Has Acieved A1 grade`);
  }
  else if(percent>=70 && percent<80){
 console.log(`Congrats ${student.Name} Has Acieved A grade`);}

 else if(percent>=60 && percent<70){
 console.log(`Congrats ${student.Name} Has Acieved B grade`);}

 else {
 console.log(` ${student.Name} Has Acieved grade Below B`);}

  

 


}

).filter((percent)=>
    
{
    
    if(percent>80){
        A1Grade.push(StudentInfo)
    }
    else if(percent>70 && percent<80){
AGrade.push(StudentInfo)
    }
}
   



 
)








 


/* let specialstud=StudentInfo.filter(stud =>{

  numbers=stud.Marks.Physics+stud.Marks.English+stud.Marks.Islamiat+stud.Marks.Science+stud.Marks.Urdu,
  maxnumbers=(stud.subjects*100),
  percent=(numbers/maxnumbers)*100

  if(percent>80){
    console.log(`Congrats ${stud.name} Has Acieved A1 grade`);
  }
  else if(percent>=70 && percent<80){
 console.log(`Congrats ${stud.name} Has Acieved A grade`);}

 else if(percent>=60 && percent<70){
 console.log(`Congrats ${stud.name} Has Acieved B grade`);}

 else {
 console.log(` ${stud.name} Has Acieved grade Below B`);}


}

)
 */



 



