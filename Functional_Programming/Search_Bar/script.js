let userContainer=document.querySelector(".UserList");
let search=document.getElementById("searchInput")

let array=[
    {
        ProfileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqNORwtRfjnEWkXzsJWSjWw6lvwWP-aOmfQ&s",
        name:"Anas Bhojani",
        profession:"Senior Software Engineer",
        email:"anasbhojani123@gmail.com"
    },
    {
        ProfileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnnEXV3GGeHJ66RxCT2oj70n-b8CNdp_peA&s",
        name:"Ashar Jaffery",
        profession:"Senior Data Engineer",
        email:"sharjaffery123@gmail.com"
    },
    {
        ProfileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76rz3LSHz6G8tMw8KFOAcA7BbIQEmRcdE1g&s",
        name:"Umer Bin Azam",
        profession:"Senior Devops Engineer",
        email:"umerazam123@gmail.com"
    }
    ,
    
    ,
    {
        ProfileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76rz3LSHz6G8tMw8KFOAcA7BbIQEmRcdE1g&s",
        name:"Qasim Sheikh",
        profession:"Senior Cloud Engineer",
        email:"qasim123@gmail.com"
    }
    ,
    {
        ProfileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76rz3LSHz6G8tMw8KFOAcA7BbIQEmRcdE1g&s",
        name:"Muneeb Tahir",
        profession:"Senior UI/UX Designer",
        email:"muneeb123@gmail.com"
    }
    ,
    {
        ProfileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76rz3LSHz6G8tMw8KFOAcA7BbIQEmRcdE1g&s",
        name:"monis iqbal",
        profession:"FrontEnd Engineer",
        email:"monis123@gmail.com"
    }
    ,
    {
        ProfileUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76rz3LSHz6G8tMw8KFOAcA7BbIQEmRcdE1g&s",
        name:"Habib Memon",
        profession:"Senior Backend Engineer",
        email:"habib123@gmail.com"
    }

]

function RenderUsersArray(users){
    userContainer.innerHTML=""
users.map((obj)=>{
let { ProfileUrl, name, profession, email}=obj
    let Divelement=document.createElement("div");
    Divelement.className="user-details";

    Divelement.innerHTML=`
    
    <img src=${ProfileUrl} alt="">
<h4>${name}</h4>
<h6>${profession}</h6>
<p>${email}</p>
    `

    userContainer.append(Divelement);
   
})

}
RenderUsersArray(array)

 function HandleUsers(){
    let searchvalue=search.value;
    let FilterUsers=array.filter((items)=>{
      
         return (items.name.toLowerCase().includes(searchvalue) || items.email.toLowerCase().includes(searchvalue))


    });
    userContainer.innerHTML=""

    if(FilterUsers.length>0){
        RenderUsersArray(FilterUsers)
    }

    else{
        let ErrorMessage=document.createElement("p")
        ErrorMessage.className="error-msg"
        ErrorMessage.textContent="This UserName and Email is not in search"
        userContainer.appendChild(ErrorMessage)
    }
  
} 
search.addEventListener("input",HandleUsers)
