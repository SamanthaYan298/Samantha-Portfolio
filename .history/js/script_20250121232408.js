// Nav Bar Page Selected
// 选择所有的 section 和导航链接
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

// IntersectionObserver 的回调函数
const observerCallback = (entries) => {
  entries.forEach((entry) => {
    // 获取对应 section 的导航链接
    const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      // 当前 section 可见时，为对应链接添加 active 类
      links.forEach((link) => link.classList.remove('active')); // 移除其他链接的 active 类
      link.classList.add('active'); // 添加 active 类到当前链接
    }
  });
};

// 设置 IntersectionObserver 的选项
const observerOptions = {
  threshold: 0.5, // 当 section 的 50% 在视口内时触发
};

// 创建 IntersectionObserver 实例
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 为每个 section 设置监听
sections.forEach((section) => observer.observe(section));



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



  