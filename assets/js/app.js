// Active Menu Selection
const activeMenu = document.getElementsByClassName("header-nav-item");

let addSelectClass = function () {
   removeSelectClass();
   this.classList.add('is-active');
}

let removeSelectClass = function () {
   for (var i = 0; i < activeMenu.length; i++) {
      activeMenu[i].classList.remove('is-active')
   }
}

for (var i = 0; i < activeMenu.length; i++) {
   activeMenu[i].addEventListener("click", addSelectClass);
}

// Open Close Navbar Menu on Click Mobile
const navbarMenu = document.querySelector(".header-nav");
const mobileMenu = document.querySelector(".header-mobile-menu");


if (mobileMenu && navbarMenu) {
   mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}



// Search 
function Search() {
   const cards = document.querySelectorAll('.design-card')
   const search = document.getElementById("search").value;

   for (var i = 0; i < cards.length; i++) {
      if (cards[i].innerText.toLowerCase()
         .includes(search.toLowerCase())) {
         cards[i].classList.remove("is-hidden");
         cards[i].parentElement.classList.remove("justify-content-xl-start");
      } else {
         cards[i].classList.add("is-hidden");
         cards[i].parentElement.classList.add("justify-content-xl-start");
      }
   }
}

// delay
let timer;
let searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', () => {
   clearTimeout(timer);
   timer = setTimeout(Search, 400);
});

