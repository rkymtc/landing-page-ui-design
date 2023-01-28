

// Active Menu Selection
const activeMenu =document.getElementsByClassName("header-nav-item");

let addSelectClass = function () {
   removeSelectClass();
   this.classList.add('is-active');
}

var removeSelectClass = function () {
   for (var i = 0; i < activeMenu.length; i++) {
      activeMenu[i].classList.remove('is-active')
   }
}

for (var i = 0; i < activeMenu.length; i++) {
   activeMenu[i].addEventListener("click", addSelectClass);
}

const navbarMenu = document.querySelector(".header-nav");
const mobileMenu = document.querySelector(".header-mobile-menu");

// Open Close Navbar Menu on Click Mobile
if (mobileMenu && navbarMenu) {
   mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});
