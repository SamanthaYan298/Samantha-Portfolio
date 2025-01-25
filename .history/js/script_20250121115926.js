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

let lastScrollTop = 0; // 上次的滚动位置

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // 用户向下滚动
    curve.classList.remove('flat'); // 圆弧出现
  } else {
    // 用户向上滚动
    curve.classList.add('flat'); // 圆弧变平
  }

  lastScrollTop = currentScroll; // 更新滚动位置
});


  