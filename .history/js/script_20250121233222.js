// Nav Bar Page Selected



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
const floatingStar = document.querySelector('.floating-star');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const rotationDegree = scrollPosition % 360;
  floatingStar.style.transform = `rotate(${rotationDegree}deg)`;
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}



  