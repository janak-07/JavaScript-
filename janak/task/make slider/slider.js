
const arr = [
    {
        id : 1, slide1 :"Graphics Designer", image :  "https://images.pexels.com/photos/18723456/pexels-photo-18723456/free-photo-of-portrait-of-woman-in-front-of-a-petrol-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id : 2,  slide1 :"Web Devloper", image : "https://images.pexels.com/photos/27573813/pexels-photo-27573813/free-photo-of-a-reflection-of-a-building-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load "
    }, 
    {
        id : 3, slide1 :"UI UX DESIGNER",  image :" https://images.pexels.com/photos/8408553/pexels-photo-8408553.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }, 
];

const img = document.querySelector("#image");
const slide1 = document.querySelector("#slide1");

const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");

let count = 0;

function showWinner(){
    arr[count];
    img.src =  arr[count].image;
    slide1.innerText = arr[count].slide1;
}

function slide (){
    next.addEventListener("click" , () => {
        count++;
        if(count > arr.length -1) {
            count = 0;
                }
        showWinner();
    })
    
    prev.addEventListener("click" , () => {
        count--;
        if(count < 0) {
            count = arr.length-1;
                }
        showWinner();
    })
}

window.addEventListener("DOMContentLoaded" , () =>{
    slide();
  
});

console.log(count);
