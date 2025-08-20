
/* let Generator={
    CSVFormat:{
        Name:"anasBhojani",age:24,Email:"anasbhojani2005@gmail.com"
    },
    JsonFormat:{
        "name":"Suneed Qazafi",
        "Age":"20",
        "Email":"suneed2006@gmail.com"
    }
}


function ReportGenerator(report){
console.log("The User Has Choosen A Report in This Format ");
report(Generator)
}
function CsvGenerator(){
    console.log("CSV Generator");
    console.log(Generator.CSVFormat);
}
function JSONgenerate(){
console.log("JSON Generator");
console.log(Generator.JsonFormat);
}

ReportGenerator(CsvGenerator);
ReportGenerator(JSONgenerate) */


/* let Users=[10,23,34,23,12,34];

let result=Users.reduce((acc,currentValue)=>{
    return acc+currentValue
},0)
console.log(result); */

/* let Details=[
    {
        Name:"Anas Bhojani",
        Department:"IT",
        Salary:70000
    },
    {
        Name:"Habib Memon",
        Department:"IT",
        Salary:90000
    },
    {
        Name:"Suneed Qazafi",
        Department:"HR",
        Salary:60000
    },
    {
        Name:"Ali Raza",
        Department:"Finance",
        Salary:80000
    }

]
function AddGst(){
    Details=Details.map((item)=>{
        if(item.Salary>=50000){
let gst=item.Salary*0.17;
        return {...item, NetSalary:item.Salary-gst}
        }

       return {...item, NetSalary:item.Salary}
    })
    return Details;
}

let result=AddGst();
console.log(result);
 */

let ShoppingCart=[
    {
        Name:"Karachi Customer",
        Phone:"1234567890",
        Address:"123 Street, Karachi",
        items:[

            {
                ProductName:"Shirts",
                Quantity:4,
                Price:543
            },
            {
                ProductName:"Pants",
                Quantity:2,
                Price:987
            }
        ]
    },
    {
        Name:"Lahore Customer",
        Phone:"0987654321",
        Address:"456 Street, Lahore",
        items:[
            {
                ProductName:"T-Shirts",
                Quantity:3,
                Price:323
            },
            {
                ProductName:"Jeans",
                Quantity:5,
                Price:1256
            }
        ]
    }
]

function AddTax(){
ShoppingCart=ShoppingCart.map((costumer)=>{
    let TotalAmount=costumer.items.reduce((acc,currentvalue)=>{
        return acc +(currentvalue.Price*currentvalue.Quantity)

    },0)
    let tax=TotalAmount*0.15;
    let TotalAmountWithTax=TotalAmount+tax;
    return {...costumer,NetAmount:TotalAmount,Tax:tax,TotalAmountWithTax:TotalAmountWithTax}
})
return ShoppingCart;
}
let result=AddTax();
console.log(result);