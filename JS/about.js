alexischeck=document.getElementById("alexischeck");
leandrecheck=document.getElementById("leandrecheck");

individualalexis=document.getElementById("Alexis");
individualleandre=document.getElementById("Leandre");

btnright=document.getElementById("labelright");
btnleft=document.getElementById("labelleft");

alexischeck.addEventListener("change",checkalexis);
leandrecheck.addEventListener("change",checkleandre);

window.addEventListener("DOMContentLoaded", e =>{setTimeout(showpage("Leandre"),100)});

function checkalexis(){
    alexischeck.checked=true;
    leandrecheck.checked=false;
    showpage("Alexis");
    btnright.htmlFor="leandrecheck";
    btnleft.htmlFor="leandrecheck";
}

function checkleandre(){
    leandrecheck.checked=true;
    alexischeck.checked=false;
    showpage("Leandre");
    btnright.htmlFor="alexischeck";
    btnleft.htmlFor="alexischeck";
}

function check(){
    if (alexischeck.checked){
        showpage("Leandre");
    } else {
        showpage("Alexis");
    }
};

function showpage(page){
    if (page=="Leandre"){
        individualleandre.style.opacity=100;
        individualalexis.style.opacity=0;
    } else {
        individualleandre.style.opacity=0;
        individualalexis.style.opacity=100;
    }
}

function animationright(){
    //Not implemented Yet
}

function animationleft(){
    //Not implemented Yet
}