
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
let miso=document.getElementById("Miso");
let ramen=document.getElementById("Ramen");

let arr = [sushi,miso,ramen];

sushi.style.display="flex";

arr.forEach(el => {
    choiceBox.addEventListener("change", e => {
        let selectedElement = document.getElementById(e.target.value);
        el==selectedElement ? selectedElement.style.display="flex" : el.style.display="none";
    })
    
});

// card add delete item starting
let add=document.querySelector(".add-quantite");
let delet=document.querySelector(".delete-quantite");
let quantite=document.querySelector(".quantite");
add.onclick = function() {
   
    quantite.textContent = ++quantite.value;
}
delet.onclick=function(){
    if(quantite.value> 1){
        quantite.textContent = --quantite.value;
    }
    else if(quantite.value=== 1) {
        quantite.value =quantite.textContent;  
    }
    
}
let addToCart=document.querySelector(".add-icon");
let receipt=document.querySelector(".your-shop");
addToCart.onclick=function afiche(){

     document.querySelector(".your-shop").innerHTML =Document.querySelector(".item.buy");
     afiche==selectedElement ? selectedElement.style.display="flex" : el.style.display="none";
    // console.log("true");
}

function increment(qty){
    return qty++;
}

