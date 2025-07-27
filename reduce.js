let shoppingCart=[
{
    ProductName:"Shirts",
    quantity:2,
    Price:3000
}
,
{
    ProductName:"Nike Shoes",
    quantity:5,
    Price:6000
}
,
{
    ProductName:"Headphones",
    quantity:3,
    Price:2000
}


]
const PriceWithTax=
shoppingCart.reduce((acc,total)=>

    acc+total.Price
,0)
/* .reduce( (acc,curr)=>{
    return acc+curr.Price
},0) */ 
console.log(PriceWithTax);
