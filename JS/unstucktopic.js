window.addEventListener("DOMContentLoaded",unstuck)

function unstuck(){
    var stuck=document.getElementsByClassName("slider-right");
    for (let i=0;i<stuck.length;i++){
        stuck[i].style.left="-100%";
    }
    setTimeout(function(){
        for (let i=0;i<stuck.length;i++){
            stuck[i].style.left="";
        }
    },10);
}