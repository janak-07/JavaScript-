let btn=document.getElementsByClassName("btn");
let u=document.getElementById("u");
let img=document.querySelector("img");

// function d() {
//     if (  u.style.backgroundColor == "aqua") {
//         u.style.backgroundColor="yellow"
        
//     }else if( u.style.backgroundColor == "yellow"){
//         u.style.backgroundColor="red"

//     }else{
//         u.style.backgroundColor="aqua"

//     }
// }
function d() {
    if ( img.src=="https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery") {
       img.src="https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg"
        
    }else if( u.style.backgroundColor == "yellow"){
        u.style.backgroundColor="red"

    }else{
        u.style.backgroundColor="aqua"

    }
}