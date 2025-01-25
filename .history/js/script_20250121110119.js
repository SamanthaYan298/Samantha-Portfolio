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

// 选择圆形元素
const circle = document.querySelector('.circle');

// 使用 Intersection Observer 检测圆形是否进入视窗
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 添加类名激活动画
      circle.classList.add('active');
    } else {
      // 可选：滚出视窗时移除类名
      circle.classList.remove('active');
    }
  });
}, {
  threshold: 0.5 // 当圆形有一半进入视窗时触发
});

// 观察圆形
observer.observe(circle);
