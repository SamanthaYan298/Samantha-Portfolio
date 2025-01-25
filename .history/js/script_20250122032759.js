// Nav Bar Page Selected

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
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

const floatingStar = document.querySelector('.floating-star');

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const rotationDegree = scrollPosition % 360;
//   floatingStar.style.transform = `rotate(${rotationDegree}deg)`;
// });

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Star does not go to footer

const floatingStar = document.querySelector('.floating-star');
const footer = document.querySelector('footer');

// 获取footer的位置
const footerOffset = footer.getBoundingClientRect().top;

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 当滚动位置超过footer位置时，停止scrollToTop按钮
    if (scrollTop + window.innerHeight >= footerOffset) {
        floatingStar.style.position = 'absolute';  // 改为绝对定位
        floatingStar.style.bottom = '0';  // 停在footer上方
    } else {
        floatingStar.style.position = 'fixed';  // 改为固定定位
        floatingStar.style.bottom = '6rem';  // 默认位置
    }
});


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

  