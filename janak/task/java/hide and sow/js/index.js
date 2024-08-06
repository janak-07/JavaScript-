let inp=document.querySelector("input")

function hide() {
    if (inp.type == "text") {
        inp.type="password"
    }else{
        inp.type="text"
    }
}