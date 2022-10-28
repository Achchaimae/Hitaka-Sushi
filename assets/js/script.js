



/*menu dropdown */
var navBarList = document.querySelector(".Navbar ul");
var navBarIcon = document.querySelector(".dropdown");
navBarIcon.onclick = function () {
    navBarList.classList.toggle("show");
}
/*end menu dropdown */
let choiceBox=document.querySelector("select")
let allMenu =document.querySelectorAll("container");
let sushi=document.getElementById("Sushi");
let obento=document.getElementById("Obento");
let ramen=document.getElementById("Ramen");

let arr = [sushi,obento,ramen];

sushi.style.display="flex";

arr.forEach(el => {
    choiceBox.addEventListener("change", e => {
        let selectedElement = document.getElementById(e.target.value);
        el==selectedElement ? selectedElement.style.display="flex" : el.style.display="none";
    })
    
});

