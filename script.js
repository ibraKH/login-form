const preload = document.getElementById("preload");
const parent = document.getElementById("parent");
const logo = document.getElementsByClassName("preloadLogo")[0];
const ibra = document.getElementsByClassName("ibra")[0];


const timer = setInterval(() => {
    
    logo.classList.add("hide");
    ibra.classList.add("hide");
    preload.classList.add("hide");
    parent.classList.remove("hide");

    clearInterval(timer);
}, 1000);