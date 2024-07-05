window.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem', window.scrollY > 500);
});

window.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem2', window.scrollY > 2600);
});