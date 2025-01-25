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
const curveSection = document.querySelector('.curve-section');

// 获取 curveSection 的位置
const curveSectionTop = curveSection.offsetTop;

// 监听滚动事件
window.addEventListener('scroll', () => {
  // 获取当前滚动位置
  const scrollY = window.scrollY;

  // 计算滚动百分比（范围 0 ~ 1）
  const progress = Math.min((scrollY - curveSectionTop + window.innerHeight) / window.innerHeight, 1);

  // 动态调整 clip-path：起始为圆弧，逐渐变为直线
  const newClipPath = `ellipse(${50 + 50 * (1 - progress)}% ${100 * (1 - progress)}% at 50% 100%)`;
  curve.style.clipPath = newClipPath;
});


  