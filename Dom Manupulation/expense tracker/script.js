

let CurrentBalance=document.getElementById("my-balance");
let MyIncome=document.getElementById("income");
let MyExpenses=document.getElementById("expense");
let list=document.getElementById("list");
let TransactionName=document.getElementById("trans-ph");
let TransactionAmount=document.getElementById("amount-ph");
let Submit=document.getElementById("submit")
let MyTotalBalance=document.getElementById("totalBalance")

   let Transactions=[]
  
   let income=0
function AddingTransactions(){
 

    const title=TransactionName.value;
    const amount=Number(TransactionAmount.value);
if(income===0){
if(title===""  || amount<=0  || isNaN(amount)){
        alert("Please Enter The Correct Info")
        return;
    
}
}
income=amount
    
let transactions={
    Title:title,
    Amount:-Math.abs(amount)
}


 TransactionName.value=""
TransactionAmount.value="" 
MyTotalBalance.value=""
 

Transactions.push(transactions);
AddTransactionToList(transactions);
 UpdateUI(); 


}
function UpdateUI(){
    let expenses=0; 
    
    
   

    Transactions.forEach((tx)=>{
        expenses+=tx.Amount
    });
    let balance=income+expenses;

    MyTotalBalance.textContent=`Balance:${balance}`;
     CurrentBalance.textContent=`Balance:${balance}`
    MyExpenses.textContent=`Expenses:${expenses}`;
     MyIncome.textContent=`Income:${income}` ;
}
function AddTransactionToList(transactions){
      const delBtn=document.createElement("button");
    delBtn.className="deletebtn"
    delBtn.textContent="Delete"
     delBtn.addEventListener("click",()=>{
        Transactions=Transactions.filter((t)=>t!==transactions
        )
        li.remove();
        
        UpdateUI();
    })  
    
const li=document.createElement("li");
li.innerText=`Title :${transactions.Title} | Amount:${transactions.Amount} `

list.appendChild(li);
li.appendChild(delBtn);
UpdateUI();

}
Submit.addEventListener("click", AddingTransactions);
