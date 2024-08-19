
const arr = [
    {
        id : 1, slide1 :"Graphics Designer", image : "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id : 2,  slide1 :"Web Devloper", image : "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }, 
    {
        id : 3, slide1 :"UI UX DESIGNER",  image :"https://images.pexels.com/photos/670061/pexels-photo-670061.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }, 
];

const img = document.querySelector("#image");
const slide1 = document.querySelector("#slide1");
// const topic = document.querySelector("#topic");

const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");

let count = 0;

function showWinner(){
    arr[count];
    img.src =  arr[count].image;
    slide1.innerText = arr[count].slide1;
    // topic.innerText = arr[count].topic;
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
