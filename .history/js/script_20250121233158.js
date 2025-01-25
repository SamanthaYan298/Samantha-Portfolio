// Nav Bar Page Selected
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname; // 获取当前页面的路径

    navLinks.forEach(link => {
        // 比较链接的 href 和当前的路径部分（例如 index.html、projects.html）
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); // 如果匹配，则添加 active 类
        } else {
            link.classList.remove('active'); // 否则移除 active 类
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

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const rotationDegree = scrollPosition % 360;
  floatingStar.style.transform = `rotate(${rotationDegree}deg)`;
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}



  