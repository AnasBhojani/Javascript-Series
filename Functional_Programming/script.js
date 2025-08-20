/* let Images=document.querySelectorAll(".slide");
let Image_Container=document.querySelector(".image-container");
let Image_slider=document.querySelector(".image-slider");

let slideIndex=0;
 */

let Images = document.querySelectorAll(".slide");
let Image_Container = document.querySelector(".image-container");
let Image_slider = document.querySelector(".image-slider");
let bubble=document.querySelectorAll(".bubble")

let slideIndex = 0;


function ShowSlide(index){
    Images.forEach((img,i) => {
        img.style.display=i===index ? "block" : "none";
       
    })


    bubble.forEach((bub,j) =>{
        if(j===index){
            bub.classList.add("active")
        }else{
            bub.classList.remove("active")
        }
    })
}
ShowSlide(slideIndex)
setInterval(NextSlide,3000)

function NextSlide(){
    slideIndex= (slideIndex+1) % Images.length;
    ShowSlide(slideIndex)
}