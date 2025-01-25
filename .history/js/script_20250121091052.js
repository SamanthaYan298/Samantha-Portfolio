window.addEventListener('scroll', () => {
    const banner = document.querySelector('.banner');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
