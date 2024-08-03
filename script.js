const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

/*ScrollReveal().reveal('.products', {delay: 500}); */
ScrollReveal({
    distance: '80px',
    duration: 1500,
    delay: 130,
});
ScrollReveal().reveal('.products, .reviews, .update-cart', { origin: 'top' });
ScrollReveal().reveal('.main-text',{origin:"left"});