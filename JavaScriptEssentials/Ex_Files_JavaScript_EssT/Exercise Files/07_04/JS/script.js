const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current) {
    e.preventDefault();
    
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oops" : CTA.innerHTML = "Book Now!";

    ALERT.classList.toggle("hide");
}

CTA.addEventListener("click", function(e){reveal(e, this);}, false);
CTA.addEventListener("click", function(){console.log("the button was clicked")}, false);