const satisfactionslider=document.getElementById("Satisfaction");
const output=document.getElementById("satisfactionresult");
const form=document.getElementById("contact");
const response=document.getElementById("response");
//This next line is to hide the output until it is displayed.
response.style.marginLeft="-100%";

satisfactionslider.addEventListener("input",Outputchange);

form.addEventListener("submit", e=>{Formoutput(e)})

function Formoutput(event){
    event.preventDefault();
    form.reset();

    response.style.marginLeft="";
    response.innerHTML="<br>We have received your informations.<br><br>We will contact you in the following weeks.<br><br><div class=\"inline\"><h3>Expected time : </h3><h1>"+Math.floor(Math.random()*6+1)+" Business days</h1></div><h6>(Disclaimer) The text above may be inaccurate as of the 3rd of Jume 2025 as the relevent sections to handle the work may have closed down.";
}

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