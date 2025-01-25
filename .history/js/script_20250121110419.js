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

// 获取圆形元素
const circle = document.getElementById('circle');

// 使用 Intersection Observer 监视圆形元素
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 当圆形进入视口时，添加动画类
      circle.classList.add('circle-active');
    } else {
      // 当圆形滚出视口时，移除动画类
      circle.classList.remove('circle-active');
    }
  });
}, {
  threshold: 0.5 // 当圆形有50%进入视口时触发动画
});

// 开始观察圆形元素
observer.observe(circle);

