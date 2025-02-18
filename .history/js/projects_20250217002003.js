// Nav Bar 

function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    var menuIcon = document.getElementById('menu-icon');
    
    menuLinks.classList.toggle('active');
    
    if (menuLinks.classList.contains('active')) {
        menuIcon.src = './images/close.png';
    } else {
        menuIcon.src = './images/menu.png';
    }
}

// Curve cover

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0; // 上次滚动的位置

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 当前的滚动位置

        // 向下滚动时，navbar 移动出视口
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-100px';  // 将 navbar 隐藏
        } else { 
            // 向上滚动时，navbar 保持在顶部
            navbar.style.top = '0';  // 重新显示在顶部
        }

        // 更新上次滚动的位置
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 防止滚动值为负数
    });
});



// Back to Top Star

document.addEventListener('DOMContentLoaded', function () {
    const floatingStar = document.querySelector('.floating-star');
    const footer = document.querySelector('.footer');
    const banner = document.querySelector('.banner');

    floatingStar.classList.add('hidden');

    window.addEventListener('scroll', () => {
        const footerRect = footer.getBoundingClientRect();
        const floatingStarHeight = floatingStar.offsetHeight;
        const bannerRect = banner.getBoundingClientRect();

        if (bannerRect.top < -300) {
            floatingStar.classList.remove('hidden');
        } else {
            floatingStar.classList.add('hidden');
        }

        if (footerRect.top < window.innerHeight - floatingStarHeight) {
            floatingStar.style.bottom = `${window.innerHeight - footerRect.top + 10}px`;
        } else {
            floatingStar.style.bottom = '6rem';
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}


// Scroll Trigger Animation

document.addEventListener('DOMContentLoaded', function () {
    const fadeIns = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeIns.forEach(fadeIn => observer.observe(fadeIn));
});

// Message
const viewProject = document.getElementById("message");
const modal = document.getElementById("coming");

viewProject.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex";

    setTimeout(function() {
        modal.style.display = "none";
    }, 3000);
});