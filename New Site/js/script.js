window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-menu');
    navbar.classList.toggle('shrink', window.scrollY > 0);
  });