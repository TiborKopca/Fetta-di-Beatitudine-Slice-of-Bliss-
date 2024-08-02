'use strict'

const hamburgerMenu = document.querySelector('.hamburger__menu-toggle');

hamburgerMenu.addEventListener('click', ()=>{
    let visible = document.querySelector('.nav').classList.toggle('nav__aside-visible');
    // console.log(visible);
    if(visible){
        hamburgerMenu.src = '/svg/X-brown_Vector.svg';
    }else{
        hamburgerMenu.src = '/svg/Hamburger_Vector.svg';
    }
})


//HEADER + MAIN RESPONSIVE
const header = document.getElementById('header');
const main = document.getElementById('main');

document.addEventListener('DOMContentLoaded', () => {
    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.target === header) {
                const headerHeight = header.getBoundingClientRect().height;
                main.style.paddingTop = headerHeight + 'px';
            }
        }
    });
    observer.observe(header);

});




