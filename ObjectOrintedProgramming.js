 
 //Shopping Cart Program
/*  function shoppingCart(product,quantity,price){
    this.product=product;
    this.quantity=quantity;
    this.price=price;
    this.TotalPrice=function(){
        return this.quantity * this.price;
    }
}

function CartMethods(){
     this.items=[];


    this.addItems=function(item){
        this.items.push(item);
        console.log(" Items added To Cart: " +item.product+ " X " +item.quantity+ " pcs ");
    }

    this.ShowCart=function(){
        this.items.forEach(function(item){
    console.log("Product: " +item.product+ " Quantity: " +item.quantity+ " Price: " +item.price);
})
console.log("The Total Cart Value is :" + this.TotalCartTotal());
    }

this.TotalCartTotal=function(){
     return this.items.reduce(function(total,item){
        return total+item.TotalPrice();
    },0);

}

this.removeitem=function(product){

   this.items=this.items.filter(function(item){
    return item.product.toLowerCase()!==product;

   })
   console.log("Items removed from Cart:" + product);
}

}

let cart=new CartMethods();

let item1=new shoppingCart("Iphone",2,5890);
let item2=new shoppingCart("Laptop",3,3076);
let item3=new shoppingCart("Tablet",4,4087);

cart.addItems(item1);
cart.addItems(item2);
cart.addItems(item3);

cart.ShowCart();
cart.removeitem("iphone");
cart.removeitem("tablet");
cart.ShowCart();
 */


// Bank Account

function BankDetails(accountholder,accountnumber,balance){
    this.accountholder=accountholder;
    this.accountnumber=accountnumber;
    this.balance=balance;
    this.deposit=function(amount){
        this.balance+=amount;
    }
    this.withdraw=function(amount){
        this.balance-=amount;
    }

}

function BankMethods(){
    this.accounts=[];

    this.addAccount=function(account){
        this.accounts.push(account);

        console.log("Account Added With The Acc Holder Name:"+account.accountholder);
    }

    this.removeAccount=function(account){
        this.accounts=this.accounts.filter(function(acc){
            return acc.accountholder.toLowerCase() !==account.accountholder.toLowerCase();
        })
        console.log("Account Removed For The Acc Holder Name:"+account.accountholder);
    }

    this.showAccount=function(){
        this.accounts.forEach(function(account){
            console.log("The Account Holder Name :"+account.accountholder+ " The Account Number Is: "+account.accountnumber + " The Balance Is: " +account.balance);
        })
        console.log("The Total Balance in The Bank Is: " + this.getTotalBalance());
    }

    this.getTotalBalance=function(){
        return this.accounts.reduce(function(total,amount){
return total +amount.balance;
        },0)
    }
    
}
let bank=new BankMethods();

let account1=new BankDetails("John Doe","123456789",1000);
let account2=new BankDetails("Jane Smith","987654321",2000);
let account3=new BankDetails("Alice Johnson","456789123",3000);

bank.addAccount(account1);
bank.addAccount(account2);
bank.addAccount(account3);

bank.showAccount(); 
account1.deposit(500);
bank.showAccount();
account2.withdraw(300);
bank.showAccount();
