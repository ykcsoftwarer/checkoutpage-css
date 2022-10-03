console.log("app.js baglandı");

const kdvUcreti = 0.18;
const kargoUcreti = 15;
const kargoBedavaUcreti =300;

window.addEventListener("load", () => {
    localStorage.setItem("kdvUcreti", "kdv");
    localStorage.setItem("kargoUcreti", "kargo");
    localStorage.setItem("kargoBedavaUcreti", "bedava");

    sessionStorage.setItem("kdvUcreti", "kdv");
    sessionStorage.setItem("kargoUcreti", "kargo");
    sessionStorage.setItem("kargoBedavaUcreti", "bedava");


});

//

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (event) => {
    // console.log(event);
    if(event.target.className == "fa-solid fa-minus") {
        //console.log("eksi butonu çalışıyor");

        // if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
        //     event.target.parentElement.querySelector(".quantity").innerText--;
        //     calculateProductPrice(event.target);
        //     calculateCartPrice();
        //   }


        if (event.target.nextElementSibling.innerText > 1) {
            event.target.nextElementSibling.innerText--;
                ;
                calculateProductPrice(event.target);
                calculateCartPrice();
              }
        


     
       
    }
    else if(event.target.className == "fa-solid fa-plus") {
       console.log("artı butonu çalışıyor"); 
       //console.log("event.target.previousElementSibling.innerText");
       event.target.previousElementSibling.innerText++;
      
    }
    else if(event.target.classList.contains("remove-product")) {
        // console.log("remove btn basıldı");
    }
        

});


