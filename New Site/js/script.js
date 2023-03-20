window.addEventListener('scroll', function() {
    console.log("'shrink' is working")

    var navbar = document.querySelector('.nav-menu');
    navbar.classList.toggle('shrink', window.scrollY > 0);
  });