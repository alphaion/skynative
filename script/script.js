$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 500;

    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

const navSlide = () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");

    // Issue: when menuON bg blurred but with the navigation
    //const blurBg = document.querySelector("#wrapper");
    
    const navLinks = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // blurred class
        //blurBg.classList.toggle('bg-blur');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        menu.classList.toggle('toggle');
    });
}
navSlide();