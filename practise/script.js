let Button=document.getElementById("serviceBtn");
let ServicesList=document.getElementById("Service-list");

Button.addEventListener("click",()=>{
    let Services=["Construction","Plumbing","Designing","Interior"];

    Services.map((service)=>{
let list=document.createElement("li");
list.textContent=service;
ServicesList.appendChild(list)

    })
})
