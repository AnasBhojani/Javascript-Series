/* class BankAccount{
#balance;
    constructor(username,email,password,phone,cnic,accountType,balance){
        this.username=username;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.cnic=cnic;
        this.accountType=accountType;
        this.#balance=balance;
    }
    deposit(amount){
        if(amount<=0){
            alert("The Amount Must Be A Positive Number And Greater Than zero")
        }
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount<=0){
            alert("The Amount Must Be A Positive Number And Greater Than zero");
            return;
        }
        if(amount>this.#balance){
            alert("Insufficient Balance");
            return;
        }
        this.#balance -= amount;
    }
}
    
let Accounts= [];
 

function CreateAccount(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let cnic=document.getElementById("cnic").value;
    let confirmpassword=document.getElementById("confirm-password").value;
    let accountType=document.getElementById("account-type").value;
    let balance=document.getElementById("balance").value;
    let password=document.getElementById("password").value;

if(!name || !email || !phone || !cnic || !confirmpassword || !accountType || !balance || !password){
    alert("Please fill all the fields");
    return;
}
if(confirmpassword!==password){
    alert("Passwords do not match");
    return;
}
if(!/^\d{5}-\d{7}-\d{1}$/.test(cnic)){
    alert("The CNIC must be in this format XXXXX-XXXXXXX-X");
    return;
}
if(phone.length!==11 || isNaN(phone)){
    alert("The Phone Number must be 11 digits");
    return;
}
else{
    alert("Account Created Successfully");}
let User=new BankAccount(name,email,confirmpassword,phone,cnic,accountType);

Accounts.push(User);

name.value="";
email.value="";
phone.value="";
cnic.value="";
confirmpassword.value="";
accountType.value="";

// Deposit function
function Deposit(){
    let amount=document.getElementById("amount").value;

    if(amount<=0 || isNaN(amount)){
        alert("Please enter a valid amount");
        return;
    }
    let account=document.getElementById("account").value;
    let name=document.getElementById("name").value;
    if(!account || !name){
        alert("Please select an account and enter your name");
        return;
    }
    let UserFind=Accounts.find(account=> account.username===name && account.accountType===account);
   if(!UserFind){
       alert("User not found");
       return;
   }
   UserFind.deposit(amount);
   alert("Deposit successful");
}
function Withdraw(){
    let amount=document.getElementById("amount").value;
    if(amount<=0 || isNaN(amount)){
        alert("The amount must be a positive number");
        return;
    }
    let account=document.getElementById("account").value;
    let name=document.getElementById("name").value;
    if(!account || !name){
        alert("Please select an account and enter your name");
        return;
    }
    let UserFind=Accounts.find(account=>account.username===name && account.accountType===account);
    if(!UserFind){
        alert("User Not Found");
        return;
    }
   UserFind.withdraw(amount);
}}

function ShowAccounts(){
    let tableBody = document.querySelector("#account-details tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    Accounts.map(account => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${account.username}</td>
            <td>${account.email}</td>
            <td>${account.phone}</td>
            <td>${account.cnic}</td>
            <td>${account.accountType}</td>
            <td>${account.balance}</td>
        `;
        tableBody.appendChild(row);
    });
}
let AccountsTable = document.getElementById("account-details");
AccountsTable.addEventListener("click", ShowAccounts);


let DepositButton = document.getElementById("deposit-btn");
DepositButton.addEventListener("click", Deposit);

let WithdrawButton = document.getElementById("withdraw-btn");
WithdrawButton.addEventListener("click", Withdraw);
 */

class BankAccount {
    #balance;
    constructor(username, email, password, phone, cnic, accountType, balance = 0) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.cnic = cnic;
        this.accountType = accountType;
        this.#balance = Number(balance);
    }

    deposit(amount) {
        amount = Number(amount);
        if (amount <= 0) {
            alert("The Amount Must Be Positive And Greater Than Zero");
            return;
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        amount = Number(amount);
        if (amount <= 0) {
            alert("The Amount Must Be Positive And Greater Than Zero");
            return;
        }
        if (amount > this.#balance) {
            alert("Insufficient Balance");
            return;
        }
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let Accounts = [];

function CreateAccount() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let cnic = document.getElementById("cnic").value;
    let confirmpassword = document.getElementById("confirm-password").value;
    let accountType = document.getElementById("account-type").value;
    let balance = document.getElementById("balance").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !phone || !cnic || !confirmpassword || !accountType || !balance || !password) {
        alert("Please fill all the fields");
        return;
    }
    if (confirmpassword !== password) {
        alert("Passwords do not match");
        return;
    }
    if (!/^\d{5}-\d{7}-\d{1}$/.test(cnic)) {
        alert("The CNIC must be in this format XXXXX-XXXXXXX-X");
        return;
    }
    if (phone.length !== 11 || isNaN(phone)) {
        alert("The Phone Number must be 11 digits");
        return;
    }

    let User = new BankAccount(name, email, password, phone, cnic, accountType, balance);
    Accounts.push(User);
    alert("Account Created Successfully");

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("cnic").value = "";
    document.getElementById("confirm-password").value = "";
    document.getElementById("account-type").value = "";
    document.getElementById("balance").value = "";
    document.getElementById("password").value = "";
}

function Deposit() {
    let amount = document.getElementById("amount").value;
    let accountType = document.getElementById("account").value;
    let name = document.getElementById("name").value;

    if (amount <= 0 || isNaN(amount)) {
        alert("Please enter a valid amount");
        return;
    }

    let UserFind = Accounts.find(user => user.username === name && user.accountType === accountType);

    if (!UserFind) {
        alert("User not found");
        return;
    }

    UserFind.deposit(amount);
    alert("Deposit successful. New Balance: " + UserFind.getBalance());
}

function Withdraw() {
    let amount = document.getElementById("amount").value;
    let accountType = document.getElementById("account").value;
    let name = document.getElementById("name").value;

    if (amount <= 0 || isNaN(amount)) {
        alert("The amount must be a positive number");
        return;
    }

    let UserFind = Accounts.find(user => user.username === name && user.accountType === accountType);

    if (!UserFind) {
        alert("User Not Found");
        return;
    }

    UserFind.withdraw(amount);
    alert("Withdraw successful. New Balance: " + UserFind.getBalance());
}

function ShowAccounts() {
    let tableBody = document.querySelector("#account-details tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    Accounts.forEach(account => {
        let row = document.createElement("tr");

        let { username, email, phone, cnic } = account;
        row.innerHTML = `
            <td>${username}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${cnic}</td>
            <td>${account.accountType}</td>
            <td>${account.getBalance()}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Attach Events
let AccountsTable = document.getElementById("account-details");
AccountsTable.addEventListener("click", ShowAccounts);

let DepositButton = document.getElementById("deposit-btn");
DepositButton.addEventListener("click", Deposit);

let WithdrawButton = document.getElementById("withdraw-btn");
WithdrawButton.addEventListener("click", Withdraw);
