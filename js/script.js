const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function stickyHeader(){
    const header = document.querySelector('.header');

    header.classList.toggle('fixed', window.scrollY > 0);
}

window.addEventListener('scroll', stickyHeader)