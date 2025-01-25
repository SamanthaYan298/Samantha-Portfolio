// take a look at gsap and look for scroll trigger
// when you get to a certain point on the page or hit your scroll trigger
// add a class to your circle when you hit your scroll trigger
// this class should add slightly different width/height properties to #circle
// use css transitions (on width and height properties) to grow your circle



// #circle {
//     width: 100vw;
//     height: 500px;
// transition: all 1s ease-in
// }

// #circle.visible {
// different hiehg tand width
// }


// gsap.to('#circle',
//     {
//         scrollTrigger: {
//             trigger: '#circle',
//             toggleClass: '.visible'
//         }
//     }
// )


const curve = document.querySelector('.curve');
let hasScrolled = false;

window.addEventListener('scroll', () => {
  const maxScroll = 300; // 最大滚动范围
  const scrollTop = Math.min(window.scrollY, maxScroll); // 限制滚动范围
  const progress = scrollTop / maxScroll; // 滚动进度 (0 到 1)

  // 只有用户开始滚动时才显示元素
  if (!hasScrolled && scrollTop > 0) {
    hasScrolled = true;
    curve.style.opacity = '1'; // 滚动后才显示元素
    curve.style.transform = 'translateY(0)'; // 滚动时从下到上移动
  }

  // 动态调整 clip-path：从平线到圆弧的动画
  const newClipPath = `ellipse(${50 + 50 * progress}% ${100 * progress}% at 50% 100%)`;
  curve.style.clipPath = newClipPath;
});



  