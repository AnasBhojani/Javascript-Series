/* var array=[1,3,5,6,8,13,12,24];
let evenNum=[];
let OddNum=[];
for (var i=0;i<array.length;i++){
    if(array[i]%2==0){
evenNum.push(array[i]);

    }
    else{
        OddNum.push(array[i]);
    }
}
console.log("The Original Array:-"+array);
console.log("The Even Numbers From The Array="+evenNum);
console.log("The Odd Numbers From The Array="+OddNum);



console.log("The Crud Application"); */
/* let users=[];

function AddUser(name,age){
users.push({id:Date.now(), name:name , age:age});
console.log("User Created Successfully");
}

function UpdateUser(id,NewName,Newage){
let user=users.find(u=>u.id==id);
if(user){
user.name=NewName;
user.age=Newage;
}
else{
    console.log("User Not Found");
}
}

function ReadUsers(){
    users.forEach(user=>
        console.log(`The users are: Id:${user.id} ,Name:${user.name} ,Age:${user.age}`)
    );
}
function DeleteUser(id){
let index=users.findIndex(u=>u.id==id);
if(index!=-1){
    users.splice(index,1);
    console.log("user Deleted Successfully");
}
else{
    console.log("index Not Found");
}
}
AddUser("anas",20);
AddUser("umer",20);
ReadUsers();
console.log("Updating List");
let UserIdToUpdate=users[1].id;
UpdateUser(UserIdToUpdate,"habib",21);
ReadUsers();
console.log("After Updation");

console.log("After Deleting Id")
let UsrIdDelete=users[0].id;
DeleteUser(UsrIdDelete);
ReadUsers();
 */

let cart=[];
function CalculateAmount(price,quantity){
return price*quantity;
}

function CreateProduct(product,price,quantity){

    let totalCost=CalculateAmount(price,quantity);
cart.push(
    
    {   
         id:Date.now() ,
         product:product,
         price:price,
         quantity:quantity,
         totalCost:totalCost
        }
        )


/* console.log("Product Added Successfully"); */

}


function ViewProduct(){
    cart.forEach(values=> 
        console.log(`The Product in the Cart Are :- ID=${values.id} , Product=${values.product} ,Price=${values.price},
            Quantity=${values.quantity} ,TotalAmount=${values.totalCost} `)
    )
}


function UpdateCard(id,Newproduct,Newprice,Newquantity){
let index=cart.find(u=>u.id==id);
if(index){
    index.product=Newproduct;
    index.price=Newprice;
    index.quantity=Newquantity;
    index.totalCost=CalculateAmount(Newprice,Newquantity);
}
else{
    console.log("User Not Found")
}
}

function DeleteItem(id){
let Index=cart.findIndex(d=>d.id==id);
if(Index !=-1){
    cart.splice(Index,1)
    console.log("User Deleted Successfully")
}
else{
    console.log("User Not Found");
}
}

console.log("\tAdding Items In The Cart-----")
CreateProduct("Shirts",2000,3);
CreateProduct("Shoes",4000,1);
ViewProduct();

console.log("\t Updating Items In Cart");
let UpdateInList=cart[1].id;
UpdateCard(UpdateInList,"headphones",5000,2);
ViewProduct();

console.log("\t Deleting Items");
let DeleteList=cart[1].id;
DeleteItem(DeleteList);
ViewProduct();
