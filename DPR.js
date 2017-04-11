window.addEventListener("DOMContentLoaded", () => {
    //add target=blank to a tags
    let a = document.getElementsByTagName("a");
    for(let i = 0; i < a.length; i++){
        a[i].setAttribute("target", "_blank");
    }
});