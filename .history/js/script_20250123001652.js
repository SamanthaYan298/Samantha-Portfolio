// Nav Bar Page Selected

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo'); // 确保 Logo 元素被正确选中

    // 函数：更新导航链接的 'active' 状态
    function updateActiveLink(path) {
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if ((path === '/' && linkHref === 'index.html') || path === linkHref) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // 页面加载时初始化导航状态
    const currentPath = window.location.pathname;
    updateActiveLink(currentPath);

    // 为每个导航链接添加点击事件监听
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const clickedHref = link.getAttribute('href');
            updateActiveLink(clickedHref); // 更新导航状态
        });
    });

    // 为 Logo 添加点击事件监听
    if (logo) {
        logo.addEventListener('click', function (e) {
            updateActiveLink('index.html'); // 手动更新 Home 的状态
        });
    }
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

    window.addEventListener('scroll', () => {
        const footerRect = footer.getBoundingClientRect();
        const floatingStarHeight = floatingStar.offsetHeight;

        // if footer is coming
        if (footerRect.top < window.innerHeight - floatingStarHeight) {
        // stop at the top of footer
            floatingStar.style.bottom = `${window.innerHeight - footerRect.top + 10}px`;
        } else {
        // back to default setting
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

  