const satisfactionslider=document.getElementById("Satisfaction");
const output=document.getElementById("satisfactionresult");

satisfactionslider.addEventListener("input",Outputchange);

function Outputchange(){
    switch(satisfactionslider.value){
        case "0":
            output.textContent="😱";
            break;
        case "1":
            output.textContent="🥵";
            break;
        case "2":
            output.textContent="😰";
            break;
        case "3":
            output.textContent="😢";
            break;
        case "4":
            output.textContent="😀";
            break;
        case "5":
            output.textContent="🥰";
            break;
    }
}

Outputchange();