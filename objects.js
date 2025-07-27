let Students={

   
    Student1:{
name:"Habib",
RollNo:107,
Section:"C",
subjects:5,
marks:{
    maths:90,
    english:89,
    physics:76,
    pst:67,
    science:65
}

    },

Student2:{

    name:"Umer",
RollNo:106,
Section:"C",
subjects:5,
marks:{
    maths:80,
    english:79,
    physics:66,
    pst:67,
    science:75
}

    
}

};

function Percentage(studentobj){
let Marks=studentobj.marks;
let TotalMarks=Marks.english + Marks.maths + Marks.physics + Marks.pst + Marks.science;
let MaxPossibleMarks=studentobj.subjects*100;
let percent=(TotalMarks/MaxPossibleMarks)*100;
console.log(`The Total Marks Achieved By ${studentobj.name} are ${TotalMarks} \n Percentage Will be= ${percent.toFixed(2)} %`);
 }

 for(let key in Students){
let student=Students[key];
Percentage(student);
 }