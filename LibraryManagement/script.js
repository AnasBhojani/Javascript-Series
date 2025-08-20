let Books=[
    {
        Name: "Matilda",
        Author: "Roald Dalph",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdmWBtRN_bhvcONUiLg_pfUK-R-hMhdJxQA&s",
        Description: "A young girl with extraordinary powers fights against injustice.",
        Type:"Comedy",
        Price: 9.99
    },
    {
        Name: "Romeo And Juliet",
        Author: "William Shakespeare",
       Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4oy1ERa-usrRE8aXbb-r9qzpEeB0Egfw2A&s",
        Description: "A tragic love story between two young lovers from feuding families.",
        Type:"Tragedy",
        Price: 12.99
    },
    {
        Name: "Gulliver's Travel",
        Author: "Jonathan Swift",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6Eq-BashexHPLuRFFXQVZDOJ9yDkbsMpCQ&s",
        Description: "A satirical novel about a man's adventures in strange lands.",
        Type:"Satire",
        Price: 11.99
    },
    {
        Name: "Alice In The Wonderland",
        Author: "Lewis Carroll",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_MbNeJ02ujvdq9VGeRu4fyCW1Z9rjev38w&s",
        Description: "A young girl's adventures in a magical land.",
        Type:"Fantasy",
        Price: 10.99
    },
    {
        Name: "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMXBlYgn2bPuuhu53nMxknqBV1K_tDeJa9w&s",
        Description: "A novel about the American dream and the disillusionment that comes with it.",
        Type:"Tragedy",
        Price: 12.99
    },
    {
        Name: "The Catcher In The Rye",
        Author: "J.D. Salinger",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zllmN-Q3fEAO57yyp3oxE1ts1D_5WMv4kg&s",
        Description: "A story about teenage alienation and loss.",
        Type:"Fiction",
        Price: 10.99
    },
    {
        Name:"Pride and Prejudice",
        Author:"Jane Austen",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVe6QYeFSkNMj7fCmgymQ1iirFYgguiA2oQ&s",
        Description:"A romantic novel that critiques the British landed gentry at the end of the 18th century.",
        Type:"Romantic",
        Price: 12.99
    },
    {
        Name:"1984",
        Author:"George Orwell",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacY0B5hQsGw1VU_Edo7ZMbdAbpc_Fgbf2cg&s",
        Description:"A dystopian novel set in a totalitarian society ruled by Big Brother.",
        Type:"Dystopian",
        Price: 14.99
    }
    ,
    {
        Name:"To Kill a Mockingbird",
        Author:"Harper Lee",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgG5CcNEG5TLfkGQopRpdVKJohkNdCnYcX5A&ss",
        Description:"A novel about the serious issues of rape and racial inequality.",
        Type:"Fiction",
        Price: 12.99
    }
    ,{
        Name:"The Book Thief",
        Author:"Markus Zusak",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlJcOjU9ucGYi2JITZo_C4qn8RmolDMB8dw&s",
        Description:"A novel about a young girl in Nazi Germany who finds solace by stealing books.",
        Type:"Historical Fiction",
        Price: 12.99
    },
    {
        Name:"The Fault in Our Stars",
        Author:"John Green",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkm-mZcMeORdaWxOuuIZn0R3E1hbKv8QjcJQ&s",
        Description:"A love story between two teenagers who meet in a cancer support group.",
        Type:"Romantic",
        Price: 12.99
    },
    {
        Type:"Comedy",
        Name:"The Hitchhiker's Guide to the Galaxy",
        Author:"Douglas Adams",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWiqmB7Cy5N9pSTiTyIdmYEp02HueGQ5u0w&s",
        Description:"A science fiction comedy that follows the misadventures of an unwitting human.",
        Price: 12.99
    }

]





let bookContainer = document.querySelector(".book-list");
function AllBooks(books){
books.map((obj)=>{


let bookDiv = document.createElement("div");
let {Name, Author, Image, Description, Type,Price} = obj;
bookDiv.innerHTML=`
<div class="book">
    <img src="${Image}" alt="">
    <h5> <span>Name:</span> ${Name}</h5>
    <h5><span>Author:</span> ${Author}</h5>
    <p><span>Description:</span> ${Description}</p>
    <h4><span>Novel Type :</span> ${Type}</h4>
    <h4 id="book-price"><span>Price :</span>${Price}</h4>
    <button class="Select">Select</button>

</div>

`

let Selectbook = bookDiv.querySelector(".Select");
let bookPrice =bookDiv.querySelector("#book-price").innerText;



Selectbook.addEventListener("click", () => {
    let selectBookContainer=document.querySelector(".selected-books");
    let bookclone=bookDiv.cloneNode(true);
    bookclone.querySelector(".Select").remove();
    let NewElem=document.createElement("div");
   NewElem.innerHTML=`
   
   <div class="quantity">
<h5>Quantity:</h5>
    <i class="fa-solid fa-minus"></i>
    <span class="count">1</span>
    <i class="fa-solid fa-plus"></i>
   </div>
  
   <div class="buttons">
   <button class="Remove">Remove</button>
    <button class="Buy">Buy</button>
   </div>

   <div class="total">
   <h5>Total Price:</h5>
   <span class="total-price">$0.00</span>
   </div>

   `



let count=NewElem.querySelector(".count");
let totalPrice=NewElem.querySelector(".total-price");
let quantity=NewElem.querySelector(".quantity");

function UpdatePrice(){
  let qty=parseInt(count.innerText);
  let Subtotal=qty*bookPrice.split(":")[1].trim();
  totalPrice.innerText=`$${Subtotal.toFixed(2)}`;
   console.log("Price Updated");
 console.log(`Total Price: ${Subtotal}`);
}

quantity.querySelector(".fa-minus").addEventListener("click", () => {
    if(parseInt(count.innerText)>1){
        count.innerText=parseInt(count.innerText)-1;
       UpdatePrice();
    }
})
    
quantity.querySelector(".fa-plus").addEventListener("click",()=>{
    count.innerText=parseInt(count.innerText)+1;
   UpdatePrice();

})

NewElem.querySelector(".Remove").addEventListener("click",()=>{
    bookclone.remove();
})

selectBookContainer.appendChild(bookclone);
bookclone.appendChild(NewElem);
UpdatePrice();

});

bookContainer.appendChild(bookDiv);

})
}




     
AllBooks(Books);
