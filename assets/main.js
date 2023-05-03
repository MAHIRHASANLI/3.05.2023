let products = document.querySelector("#products")
document.addEventListener("DOMContentLoaded", () => {
fetch("https://fakestoreapi.com/products")
    .then(response => response.json()).then(responsejson => {
        let loader = document.querySelector("#loader");
        loader.style.display = "none";
        responsejson.forEach(product => {
            products.innerHTML += `
        <div   class=" col-lg-3 col-md-6 col-sm-12 col-xs-12 my-3 productt">
        <div class="card " style="width: 18rem;">
        <button onclick=DetailBtn(${product.id})><img src="${product.image}" class="card-img-top btncart"  alt="..."></button>
        <div class="card-body">
          <h5 class="card-title"><span>Price:</span><span>${product.price}</span></h5>
          <h5 class="card-title"><span>Count:</span><span>${product.rating.count}</span></h5>
          <p class="card-text"><span>Title:</span><span>${product.title}</span></p>
        </div>
      </div>
      </div>`
        })
    })
    SearchProduct() 
    SortProduct()
    rangeProduct()
   
})
function DetailBtn(id) {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json()).then(responsejson => {
            let existing = responsejson.find((item) => item.id == id);
            localStorage.setItem("Id", JSON.stringify(existing))
            window.location = "./details.html"
        })
}
function SearchProduct() {
    let search = document.querySelector("#search")
    search.addEventListener("keyup", (e) => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json()).then(responsejson => {
            let searhcedUsers = responsejson.filter(product => product.title.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
            products.textContent=""
                searhcedUsers.forEach((item)=>{
                    // products.textContent=""
                        products.innerHTML+=`<div class="col-3 my-3">
                        <div class="card " style="width: 18rem;">
                        <img src="${item.image}" class="card-img-top btncart" onclick=DetailBtn(${item.id}) alt="...">
                        <div class="card-body">
                          <h5 class="card-title"><span>Price:</span><span>${item.price}</span></h5>
                          <h5 class="card-title"><span>Count:</span><span>${item.rating.count}</span></h5>
                          <p class="card-text">${item.title}</p>
                        </div>
                      </div>
                      </div>`
                  
                    })
      })
                });
    

}

function SortProduct() {
    sort.addEventListener("click",()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json()).then(responsejson => {
            products.textContent=""
            let productaa=responsejson.sort(function(a, b){return a.price - b.price})
            productaa.forEach((product)=>{
                products.innerHTML+=`<div class="col-3 my-3">
                <div class="card " style="width: 18rem;">
                <img src="${product.image}" class="card-img-top btncart" onclick=DetailBtn(${product.id}) alt="...">
                <div class="card-body">
                  <h5 class="card-title"><span>Price:</span><span>${product.price}</span></h5>
    
                  <p class="card-text"><span>Title:</span><span>${product.title}</span></p>
                </div>
              </div>
              </div>`
            })
           
        })
    })
}

function rangeProduct(){
    let values = document.querySelector("#value")
    let piInput = document.querySelector("#pi_input")

    let value = document.querySelector("#value")
    let pinput = document.querySelector("#pi_input")
    
    value.textContent = pinput.value
    pinput.addEventListener("input", (event) => {
        value.textContent = event.target.value
    })
    
let azad= document.querySelector("#azad")
    let pininput=document.querySelector("#pin_input")

    azad.textContent = pininput.value
    pininput.addEventListener("input", (event) => {
        azad.textContent = event.target.value
    })
    let inputaaa=document.querySelector("#inputaaa")
  
    inputaaa.addEventListener("click", () => {
        fetch("https://fakestoreapi.com/products")
    .then(response => response.json()).then(responsejson => {
       responsejson.filter((item)=>{
        products.innerHTML =""
        //    if(value<item.value && azad>item.value){
            products.innerHTML += `
            <div   class=" col-lg-3 col-md-6 col-sm-12 col-xs-12 my-3 productt">
            <div class="card " style="width: 18rem;">
            <button onclick=DetailBtn(${item.id})><img src="${item.image}" class="card-img-top btncart"  alt="..."></button>
            <div class="card-body">
              <h5 class="card-title"><span>Price:</span><span>${item.price}</span></h5>
              <h5 class="card-title"><span>Count:</span><span>${item.rating.count}</span></h5>
              <p class="card-text"><span>Title:</span><span>${item.title}</span></p>
            </div>
          </div>
          </div>`
        //    }
        })
    })
    })
}
