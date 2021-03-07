const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navLinks');
  const navLinks = document.querySelectorAll('.navLinks li');

  burger.addEventListener('click', () => {
    
    //toggle sidebar
    nav.classList.toggle('nav-active');
    
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
      }
    });

    //make burger X
    burger.classList.toggle('burgerX');
  });
  
}

navSlide();