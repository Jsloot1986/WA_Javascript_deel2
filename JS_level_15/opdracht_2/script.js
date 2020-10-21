
const btn = document.getElementById(".btn-alert");
const backgroundButtton = document.querySelector(".backgroundButton");
const pagina = document.querySelector("body");

btn.addEventListener("click", function(e) { alert("clicked button");});

backgroundButtton.textContent = "change background to blue";
backgroundButtton.addEventListener("click", toggleColor);

function toggleColor(){
    if (pagina.classList.contains("blue-background")){
        pagina.classList.remove("blue-background");
        pagina.classList.add("red-background");
        backgroundButtton.textContent = "change background to blue";
    } else{
        if (pagina.classList.contains("red-background"))
        pagina.classList.remove("red-background");
        pagina.classList.add("blue-background");
        backgroundButtton.textContent = "change background to red";
    }
}