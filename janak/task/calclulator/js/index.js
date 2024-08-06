let a= document.querySelector(".text-1");
let b= document.querySelector(".text-2");
let c= document.querySelector(".text-3");


function plus() {
    totel=parseInt(a.value) + parseInt(b.value);
    c.innerHTML=totel;
}
    

function minus() {
    totel=parseInt(a.value) - parseInt(b.value);
    c.innerHTML=totel;
}

function multi() {
    totel=parseInt(a.value) * parseInt(b.value);
    c.innerHTML=totel;
}


function divaed() {
    totel=parseInt(a.value) / parseInt(b.value);
    c.innerHTML=totel;
}
