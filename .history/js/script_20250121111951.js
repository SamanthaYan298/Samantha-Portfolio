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

document.addEventListener("DOMContentLoaded", () => {
    const nextSection = document.querySelector(".next-section");
  
    window.addEventListener("scroll", () => {
      const bannerHeight = document.querySelector(".banner").offsetHeight;
      const scrollY = window.scrollY;
  
      if (scrollY > bannerHeight / 2) {
        nextSection.style.transition = "transform 0.5s ease-out";
        nextSection.style.transform = "translateY(0)";
      }
    });
  });
  