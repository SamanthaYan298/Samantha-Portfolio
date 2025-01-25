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

// 获取 curve 的 DOM
const curve = document.querySelector('.curve');

// 创建 Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        curve.classList.add('active'); // 添加 active 类以显示圆弧
      } else {
        curve.classList.remove('active'); // 滑出视口时隐藏
      }
    });
  },
  {
    threshold: 0.5, // 可见部分大于 50% 时触发
  }
);

// 监听 curve-section
const curveSection = document.querySelector('.curve-section');
observer.observe(curveSection);


  