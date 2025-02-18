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

// Nav Bar Scrolled

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0; // 记录上一次的滚动位置

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 当前滚动位置

        // 判断是向下滚动还是向上滚动
        if (scrollTop > lastScrollTop) {
            // 向下滚动时，隐藏 navbar
            navbar.style.top = '-100px';  // 把 navbar 移到视口之外
            navbar.style.opacity = '0';   // 隐藏 navbar
        } else {
            // 向上滚动时，显示 navbar
            navbar.style.top = '0';       // 恢复 navbar 到顶部
            navbar.style.opacity = '1';   // 显示 navbar
        }

        // 更新 lastScrollTop 记录当前滚动位置
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 防止负值
    });
});


// Curve cover

const curve = document.querySelector('.curve');
let hasScrolled = false; // check if scrolling has started

window.addEventListener('scroll', () => {
  const maxScroll = 300; // maximum scroll range
  const scrollTop = Math.min(window.scrollY, maxScroll); // limit the scroll range
  const progress = scrollTop / maxScroll; // scroll progress (start to finish)

  // show next section only after start scrolling
  if (!hasScrolled && scrollTop > 0) {
    hasScrolled = true;
    curve.style.opacity = '1'; // visible
    curve.style.transform = 'translateY(0)'; // move elements from bottom to top
  }

  // clip-path: from flat line to curve animation
  const newClipPath = `ellipse(${50 + 50 * progress}% ${100 * progress}% at 50% 100%)`;
  curve.style.clipPath = newClipPath;
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