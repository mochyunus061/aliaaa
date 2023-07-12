var prevScrollPos = window.pageYOffset;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }

  prevScrollPos = currentScrollPos;
});
