const navSlide = () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__navbar');
    const navLinks = document.querySelectorAll('.header__navbar-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navbar_active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();