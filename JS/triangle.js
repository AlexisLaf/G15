console.log("loaded triangle");

addEventListener("resize",ChangetriangleSize)
window.addEventListener("DOMContentLoaded",ChangetriangleSize)


function ChangetriangleSize(){
    console.log("called the func");
    var inside=document.getElementById("face-container");
    
    var flexbox=document.getElementById("triangle");
    var t1=document.getElementById("T1");
    var t2=document.getElementById("T2");
    var t3=document.getElementById("T3");
    var t4=document.getElementById("T4");
    var t5=document.getElementById("T5");
    var t6=document.getElementById("T6");

    var transparent = "px solid transparent"
    var hori=inside.clientWidth/2;
    var verti=inside.clientHeight/2;
    var padverti=verti*(2/3)

    flexbox.style.paddingBottom=verti*(4/3)+"px";
    //To make the padding on the bottom show up.

    t1.style.borderRight=hori+"px solid blue";
    t1.style.paddingTop=verti/3+"px";
    t1.style.borderBottom=padverti+ transparent;

    t2.style.marginTop=verti/3+"px";
    t2.style.borderLeft=hori+"px solid red";
    t2.style.borderBottom=padverti+transparent;
    t2.style.borderTop=padverti+transparent;

    t3.style.borderTop=padverti+transparent;
    t3.style.borderRight=hori+"px solid pink";
    t3.style.paddingBottom=verti/3+"px"
    t3.style.marginTop=verti+"px";

    t4.style.borderLeft=hori+"px solid violet";
    t4.style.paddingTop=verti/3+"px";
    t4.style.borderRight=padverti+ transparent;

    t5.style.marginTop=verti/3+"px";
    t5.style.borderRight=hori+"px solid palegoldenrod";
    t5.style.borderBottom=padverti+transparent;
    t5.style.borderTop=padverti+transparent;

    t6.style.borderTop=padverti+transparent;
    t6.style.borderLeft=hori+"px solid cadetblue";
    t6.style.paddingTop=verti/3+"px";
    t6.style.marginTop=verti+"px";


    var face=document.getElementById("face");
    var rEye = document.getElementById("right-eye");
    var rBg  = document.getElementById("right-eye-background");
    var lEye = document.getElementById("left-eye");
    var lBg  = document.getElementById("left-eye-background");


    var img=document.getElementById("imgface");

    face.style.marginTop=((inside.clientHeight-img.clientHeight)/2)+"px";
    rEye.style.marginTop=((inside.clientHeight-img.clientHeight)/2)+"px";
    rBg.style.marginTop=((inside.clientHeight-img.clientHeight)/2)+"px";
    lEye.style.marginTop=((inside.clientHeight-img.clientHeight)/2)+"px";
    lBg.style.marginTop=((inside.clientHeight-img.clientHeight)/2)+"px";

}
