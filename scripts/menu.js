window.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem', window.scrollY > 500);
});

window.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem2', window.scrollY > 2400);
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          const headerHeight = document.getElementById('header').offsetHeight; 
          window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  });