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
    const banner = document.querySelector('.banner');
    const footer = document.querySelector('.footer');

    // 初始时隐藏按钮
    floatingStar.classList.add('hidden');

    window.addEventListener('scroll', () => {
        const bannerRect = banner.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const floatingStarHeight = floatingStar.offsetHeight;

        // 让按钮更早地出现，当 banner 区域的底部即将滚动出视口时就显示
        if (bannerRect.bottom <= window.innerHeight * 0.2) {
            floatingStar.classList.remove('hidden'); // 滚动过 banner 区域后显示按钮
        } else {
            floatingStar.classList.add('hidden'); // 在 banner 区域内时隐藏按钮
        }

        // 处理按钮与 footer 的交互
        if (footerRect.top < window.innerHeight && footerRect.top > 0) {
            // 当 footer 即将进入视口时，让按钮停留在顶部并平滑过渡
            floatingStar.style.bottom = `${Math.max(footerRect.top - floatingStarHeight - 10, 10)}px`;
        } else {
            // 向下滑动时，恢复到默认位置
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


const viewProject = document.getElementById("message");
const modal = document.getElementById("coming");

viewProject.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex";

    setTimeout(function() {
        modal.style.display = "none";
    }, 3000);
});