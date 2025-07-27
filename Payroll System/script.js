

let EmployeeName=document.getElementById("Empname");
let EmpSalary=document.getElementById("BasicSalary")
let TransportExpenses=document.getElementById("TransportExpense")
let MedicalExpense=document.getElementById("MedicalExpenses");
let list=document.getElementById("EmpList")
/* let NetTotal=document.getElementById("totalpay") */
let add=document.getElementById("Submit")

let Employees=[];
function AddEmployees(){
    let Empname=(EmployeeName.value);
    let monthlysal=Number(EmpSalary.value)
    let transport=Number(TransportExpenses.value)
    let medical=Number(MedicalExpense.value)

    if(Empname===""|| isNaN(monthlysal) || isNaN(transport) || isNaN(medical)){
        alert("Please Fill All the Information");
        return;
    }
 EmployeeName.value="";
    EmpSalary.value="";
    TransportExpenses.value="";
    MedicalExpense.value=""; 

    let EmpDetails={
        Name:Empname,
        MonthlySalary:monthlysal,
        Transport:transport,
        Medical:medical,
        Total:monthlysal+medical+transport

    }
    

    Employees.push(EmpDetails);
    AddEmpToList(EmpDetails);
   /*  UpdateUI(); */

}
/* function UpdateUI(){
    let Netpay=0;

    Employees.forEach((emp)=>{
        Netpay+=emp.MonthlySalary+emp.Transport+emp.Medical;

    });

   
   /*  NetTotal.textContent=`The Total Net Pay Of Employee is:${Netpay}` */

 
function AddEmpToList(EmpDetails){
const li=document.createElement("li")
li.className="listitems"
    const DelBtn=document.createElement("button");
    DelBtn.className="Delete";
    DelBtn.textContent="Delete";

    DelBtn.addEventListener("click",()=>{
Employees=Employees.filter((e)=>e!==EmpDetails)
 li.remove();
    });
   
li.innerText=` Name: ${EmpDetails.Name} \n Basic Salary: ${EmpDetails.MonthlySalary}\n   Transport Expenses: ${EmpDetails.Transport}\n    Medical Expense: ${EmpDetails.Medical} \n  The Total Net Pay Of ${EmpDetails.Name} is: ${EmpDetails.Total}`
list.appendChild(li);
li.appendChild(DelBtn);


}
add.addEventListener("click",AddEmployees);