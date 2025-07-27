/* /* /* let employees=[];
function AddEmployee(name,depart,salary,id){
const employee={
    id,
    name,
    depart,
    salary,
}
employees.push(employee);
console.log(`The ${name} Added Successfully`);
}


function ViewEmployees(){
    employees.forEach((employee,index)=>
    console.log(`\n\tThe Details Of Employee ${index+1}= ID:${employee.id} Name:${employee.name} ,Department:${employee.depart} ,Salary:${employee.salary}`)
    )
}
function SearchEmpByName(name){
let search=employees.find(n=>name.toLoweCase==n.name.toLoweCase);
if(search){
console.log("The Employee Found");
console.log(search);
}
}
function DeleteEmployee(id){
let index=employees.findIndex(d=>d.id==id);
if(index !=-1){
    employees.splice(index,1)
    console.log(`The Employee ID ${id} Deleted Successfully`);
}
else{
    console.log("User Not Found");
}
}

AddEmployee("Anas","Development",90000,101);
AddEmployee("Ashar","Testing",90000,102);
ViewEmployees();

SearchEmpByName("anas");
DeleteEmployee(102);
ViewEmployees(); */


/* let Library=[];
function TotalAmount(price ,quantity){
return price*quantity
}
function AddBooks(id,name,author,price,quantity){
    let totalcost=TotalAmount(price,quantity)
const book={
    id,
    name,
    author,
    price,
    quantity,
    totalcost
}
Library.push(book)
console.log("The Book Added Succesfully In Library")
}
function ViewAllBooks(){
    Library.forEach((book,index)=>
    console.log(`\nThe Details Of Book =\t The Book On Index ${index+1},Book Name:${book.name}, Book ID:${book.id} , Book Quantity :${book.quantity} ,Book Price :${book.price} ,Total Amount For Books:${book.totalcost}`

    )
)
}
function UpdateBook(id,
    Newname,
    Newauthor,
    Newprice,
    Newquantity
    ){

        let search=Library.find(u=>u.id==id);
        if(search){
        search.name=Newname
        search.author=Newauthor
        search.price=Newprice
        search.quantity=Newquantity
        search.totalcost=TotalAmount(Newprice,Newquantity)
        }
        else{
            console.log("Book Not Found")
        }

}
function DeleteBook(id){
    let index=Library.findIndex(d=>d.id==id)
    if(index!=-1){
        Library.splice(index,1);
        console.log("Book Deleted Successfully");
    }
    else{
        console.log("Id Not Found")
    }
}

AddBooks(101,"Romeo & Juliet","Shakespeare",3200,3);
AddBooks(102,"Gulliver's Travel","Wordsworth",3000,2);
ViewAllBooks();
console.log("\tUPDATING BOOK\n AFTER UPDATION")
UpdateBook(101,"Matilda","Anas Bhojani",5000,5);
ViewAllBooks();

console.log("\tDELETING BOOK\n AFTER DELETION")
DeleteBook(102);
ViewAllBooks();   */