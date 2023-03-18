window.addEventListener("scroll", function() {

  var navbar = document.querySelector(".nav-container");
  
  if (window.scrollY > 0) {
    navbar.classList.add("scroll-hover");
    console.log(Math.floor(window.scrollY));
  } else {
    navbar.classList.remove("scroll-hover");
  }

});