// Nav Bar 

function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    var menuIcon = document.getElementById('menu-icon');
    
    menuLinks.classList.toggle('active');
    
    if (menuLinks.classList.contains('active')) {
        menuIcon.src = './images/close.png';
    } else {
        menuIcon.src = './images/menu.png';
    }
}



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

document.addEventListener('DOMContentLoaded', function () {
    const floatingStar = document.querySelector('.floating-star');
    const footer = document.querySelector('.footer');

    window.addEventListener('scroll', () => {
        const footerRect = footer.getBoundingClientRect();
        const floatingStarHeight = floatingStar.offsetHeight;

        // if footer is coming
        if (footerRect.top < window.innerHeight - floatingStarHeight) {
        // stop at the top of footer
            floatingStar.style.bottom = `${window.innerHeight - footerRect.top + 10}px`;
        } else {
        // back to default setting
            floatingStar.style.bottom = '6rem';
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}


// Scroll Trigger Animation

document.addEventListener('DOMContentLoaded', function () {
    const floatingStar = document.querySelector('.floating-star');
    const banner = document.querySelector('.banner');
    const footer = document.querySelector('.footer');

    let isScrolled = false; // 用来判断是否已经开始滚动

    window.addEventListener('scroll', () => {
        const bannerRect = banner.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const floatingStarHeight = floatingStar.offsetHeight;

        // 如果页面没有滚动，按钮保持隐藏
        if (window.scrollY > 0) {
            if (!isScrolled) {
                isScrolled = true;  // 标记已经开始滚动
                floatingStar.classList.remove('hidden'); // 滚动开始后显示按钮
            }
        }

        // 当页面滚动到 banner 时隐藏按钮
        if (bannerRect.top <= window.innerHeight && bannerRect.bottom >= 0) {
            floatingStar.classList.add('hidden'); // 在 banner 区域时隐藏
        } else {
            floatingStar.classList.remove('hidden'); // 离开 banner 区域时显示
        }

        // 当 footer 区域接近时，确保按钮停留在 footer 上方
        if (footerRect.top <= window.innerHeight && footerRect.top >= 0) {
            floatingStar.style.bottom = `${Math.max(footerRect.top - floatingStarHeight - 10, 10)}px`;
        } else {
            floatingStar.style.bottom = '6rem'; // 恢复到初始位置
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}


// Message

const viewProject = document.getElementById("message");
const modal = document.getElementById("coming");

viewProject.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex";

    setTimeout(function() {
        modal.style.display = "none";
    }, 3000);
});