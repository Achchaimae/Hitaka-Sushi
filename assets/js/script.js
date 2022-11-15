
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
let plus=document.querySelectorAll(".add-quantite");
let minus=document.querySelectorAll(".delete-quantite");
let quantite=document.querySelector(".quantite");
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click",plus_qty );
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click",minus_qty );
}


function plus_qty(e){
    let qty = e.target.parentElement.children[1];
    
    parseInt(qty.innerHTML++);

    
}
function minus_qty(e){
    let qty = e.target.parentElement.children[1];
    parseInt(qty.innerHTML--);
    if (parseInt(qty.innerHTML--) <= 1) {
        qty.innerHTML = 1;
    }
}
let addBtn=document.querySelectorAll("#add_btn");
let placeItem = document.getElementById("items");
let total = document.getElementById("total");

let t = 0;

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", addToCart);
}

function addToCart(e){
let product=e.target.parentElement.parentElement;
let title=product.children[0].children[1].textContent;
let img=product.children[0].children[0].src;
let price= parseFloat(product.children[1].children[0].textContent);
let qty= parseInt(product.children[1].children[1].children[1].textContent);
placeItem.innerHTML += `<div class="receipt-box">
                            <img src="${img}" alt="" class="receipt-img">
                            <div class="detail-box">
                                <div class="plat-title">${title}</div>
                                <div class="plat-price">${qty} x $${price}</div>
                            </div>
                            <!-- remove cart -->
                            <i class='bx bxs-trash plat-remove'></i>
                            <hr><hr>
                        </div>`

        
        


t += qty * price 

total.textContent = "$" + t;
//Remove items from cart
var removeCartButton=document.getElementsByClassName("plat-remove");

for (var i = 0; i < removeCartButton.length; i++) {
    var button = removeCartButton[i];
    button.addEventListener("click", event => {
        var buttonClicked=event.target;
        qty =buttonClicked.parentElement.querySelector('.plat-price').innerHTML.slice(0,2);
        price=buttonClicked.parentElement.querySelector('.plat-price').innerHTML.slice(-4);
        t -= qty * price;
        
        
        
        total.textContent='';
        total.textContent = "$" + t;
        buttonClicked.parentElement.remove();
    })
}
// endRemove items from cart

}
