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

// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 选择你的圆形元素
const circle = document.querySelector('.circle');

// 定义动画
gsap.to(circle, {
  x: 300, // 动画结束后水平移动 300 像素
  scale: 2, // 放大两倍
  rotation: 360, // 旋转 360 度
  backgroundColor: "#00ff00", // 颜色变为绿色
  scrollTrigger: {
    trigger: circle, // 滚动触发的目标元素
    start: "top 75%", // 动画开始点（目标元素到达视窗顶部 75% 时）
    end: "top 25%", // 动画结束点（目标元素到达视窗顶部 25% 时）
    scrub: true, // 滚动时动画同步（平滑）
    markers: true, // 显示滚动触发器的起点和终点（仅调试用）
  }
});
