alexischeck=document.getElementById("alexischeck");
leandrecheck=document.getElementById("leandrecheck");

individualalexis=document.getElementById("Alexis");
individualleandre=document.getElementById("Leandre");

btnright=document.getElementById("labelright");
btnleft=document.getElementById("labelleft");

var middle;
var outside;


alexischeck.addEventListener("change",checkalexis);
leandrecheck.addEventListener("change",checkleandre);

window.addEventListener("DOMContentLoaded", e =>{showpage("Leandre")});

function checkalexis(){
    alexischeck.checked=true;
    leandrecheck.checked=false;
    btnright.htmlFor="leandrecheck";
    btnleft.htmlFor="leandrecheck";
}

function checkleandre(){
    leandrecheck.checked=true;
    alexischeck.checked=false;
    btnright.htmlFor="alexischeck";
    btnleft.htmlFor="alexischeck";
}

function check(){
    if (leandrecheck.checked){
        showpage("Leandre");
    } else {
        showpage("Alexis");
    }
};

function showpage(page){
    if (page=="Leandre"){
        individualleandre.style.opacity=100;
        individualalexis.style.opacity=0;
        middle=individualleandre;
        outside=individualalexis;
    } else {
        individualleandre.style.opacity=0;
        individualalexis.style.opacity=100;
        middle=individualalexis;
        outside=individualleandre;
    }
}

function animationright(){
    outside.style.marginLeft="-100vw";
    outside.style.opacity=100;

    for (let i=10;i<=100;i+=1){
        setTimeout(function(){
            outside.style.marginLeft= (-100+i)+"vw";
            middle.style.marginLeft=(i)+"vw";
        },i*10)
    }
    setTimeout(function(){
        middle.style.marginLeft=0;
        middle.style.opacity=0;

        tmp=outside;
        outside=middle;
        middle=tmp;
    },1100);
}

function animationleft(){
    outside.style.marginLeft="100vw";
    outside.style.opacity=100;

    for (let i=10;i<=100;i+=1){
        setTimeout(function(){
            outside.style.marginLeft= (100-i)+"vw";
            middle.style.marginLeft=(-i)+"vw";
        },i*10)
    }
    setTimeout(function(){
        middle.style.marginLeft=0;
        middle.style.opacity=0;

        tmp=outside;
        outside=middle;
        middle=tmp;
    },1100)
}