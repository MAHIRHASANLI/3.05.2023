let detelsItem=document.querySelector(".detelsitem")
document.addEventListener("DOMContentLoaded", () => {
let detelsId = JSON.parse(localStorage.getItem("Id"))
console.log(detelsId);

dataProduct(detelsId)

function dataProduct(idd){
    fetch(`https://fakestoreapi.com/products/${idd.id}`)
    .then(res=>res.json()).then(data=>{
        let loader = document.querySelector("#loader");
        loader.style.display = "none";
            detelsItem.innerHTML = `
            <button id="backbtn" onclick=backBtn() type="button">Come back</button> 
            <div class="col-5 detels-item">
            <img id="image" src="${data.image}" onclick=modalBtn() alt=""></img>
            </div>
            <div class="col-7 detels-item">
            <p class="card-title"><strong>Price:</strong>  <span>${data.price}</span></p>
            <p class="card-title"><strong>Count:</strong>  <span>${data.rating.count}</span></p>
            <p class="card-text"><strong>Rate:</strong>  <span>${data.rating.rate}</span></p>
            <p class="card-text"><strong>Rate:</strong>  <span>${data.category}</span></p>
            <p class="card-text"><strong>Title:</strong>  <span>${data.title}</span></p>
            <p class="card-text"><strong>Description:</strong>  <span>${data.description}.</span></p>
            </div>`
        })
    }

})
     
    function modalBtn(){
        let modal=document.querySelector("#modal")
        // modal.style.backgroundImage = "url()"
        // modal.style.backgroundImage = 'url(${})'
        modal.style.transform = "translate(-50%, -50%) scale(1)";
        modal.style.visibility = "visible";
        modal.style. opacity = "1";
        modal.style.top = "50%";
    modal.style.left = "50%";
    let modalbtn=document.querySelector(".modalbtn")
    modalbtn.addEventListener("click",()=>{
        removeModal()
    })
        }
function removeModal(){
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.transform = "translate(-50%, -50%) scale(0)";
}

function backBtn(){
    window.location = "./index.html"
}