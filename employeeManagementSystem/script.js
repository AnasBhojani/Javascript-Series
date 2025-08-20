let ProgressBar=document.querySelector(".fa-bars-progress");
let Sidebar=document.querySelector(".sidenav");
let CloseButton=document.querySelector(".fa-xmark");

ProgressBar.addEventListener("click",()=>{
   
    Sidebar.classList.add("active");
    Sidebar.classList.remove("inactive")
   
   
})
 CloseButton.addEventListener("click",()=>{
    Sidebar.classList.remove("active");
    Sidebar.classList.add("inactive")
})


let NameField=document.getElementById("name");
let EmailField=document.getElementById("email");
let DepartmentField=document.getElementById("depart");
let PhoneField=document.getElementById("phone");
let SalaryField=document.getElementById("salary");
let AddCreate=document.querySelector(".add");
let ListContainer=document.querySelector(".list-container");

let Employees=[];
function AddEmployees(){
    let EmployeeDetails={
        NameField:NameField.value,
        EmailField:EmailField.value,
        DepartmentField:DepartmentField.value,
        PhoneField:Number(PhoneField.value),
        SalaryField:Number(SalaryField.value)
    }


    if(!EmployeeDetails.NameField||
    !EmployeeDetails.EmailField||
    !EmployeeDetails.DepartmentField){
        alert("Please Fill All The Fields Correctly");
        return;
    }  
    if(isNaN(EmployeeDetails.PhoneField)||
     isNaN(EmployeeDetails.SalaryField)){
        alert("The Phone Number and Salary must be valid numbers.");
        return;
    }
 Employees.push(EmployeeDetails);
AddEmployeeToList(EmployeeDetails);    
   


}
function AddEmployeeToList(Details){
    let NewElement=document.createElement("ul");
    let {NameField, EmailField, DepartmentField, PhoneField, SalaryField} = Details;
    NewElement.className="EmpList";
    NewElement.innerHTML=`
    
    <li class="items">${NameField}</li>
    <li class="items">${EmailField}</li>
    <li class="items">${PhoneField}</li>
    <li class="items">${DepartmentField}</li>
    <li class="items">${SalaryField}</li>
    <li class="items"><button class="del-btn">Delete</button></li>
    
    `
     let DeleteButton=NewElement.querySelector(".del-btn");
    DeleteButton.addEventListener("click",()=>{
       Employees=Employees.filter((item)=>item!==Details)
       NewElement.remove();

    }) 
    ListContainer.appendChild(NewElement);

}
AddCreate.addEventListener("click",AddEmployees)
