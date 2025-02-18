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
    const footer = document.querySelector('footer');

    // 监听 banner 区域
    const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                floatingStar.classList.add('hidden'); // 当 banner 进入视口时隐藏按钮
            } else {
                floatingStar.classList.remove('hidden'); // 当 banner 离开视口时恢复按钮
            }
        });
    }, {
        root: null,
        threshold: 0.1  // 当 banner 区域的 10% 可见时触发
    });

    // 监听 footer 区域
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                floatingStar.classList.add('at-footer'); // 当 footer 进入视口时按钮停在 footer 上方
            } else {
                floatingStar.classList.remove('at-footer'); // 离开 footer 区域时按钮恢复
            }
        });
    }, {
        root: null,
        threshold: 0.1  // 当 footer 区域的 10% 可见时触发
    });

    // 确保每个元素都存在
    if (banner) {
        bannerObserver.observe(banner);
    }

    if (footer) {
        footerObserver.observe(footer);
    }
});


// message

const viewProject = document.getElementById("message");
const modal = document.getElementById("coming");

viewProject.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex";

    setTimeout(function() {
        modal.style.display = "none";
    }, 3000);
});