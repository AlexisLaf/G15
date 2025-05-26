/**Searches for when the page is either loaded or the (viewport) size is changed. */
addEventListener("resize",ChangeViewportSize)
window.addEventListener("DOMContentLoaded",ChangeViewportSize)

function ChangeViewportSize(){
    header = document.getElementsByTagName("header")[0];

    header.style.top=(-header.offsetHeight+10)+"px"
}