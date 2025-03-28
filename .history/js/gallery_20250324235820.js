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
    const banner = document.querySelector('.banner');

    floatingStar.classList.add('hidden');

    window.addEventListener('scroll', () => {
        const footerRect = footer.getBoundingClientRect();
        const floatingStarHeight = floatingStar.offsetHeight;
        const bannerRect = banner.getBoundingClientRect();

        if (bannerRect.top < -300) {
            floatingStar.classList.remove('hidden');
        } else {
            floatingStar.classList.add('hidden');
        }

        if (footerRect.top < window.innerHeight - floatingStarHeight) {
            floatingStar.style.bottom = `${window.innerHeight - footerRect.top + 10}px`;
        } else {
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
    const fadeIns = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeIns.forEach(fadeIn => observer.observe(fadeIn));
});

// Gallery

function openGallery(id) {
    closeAll();
    resetGallery();
    document.body.classList.add("no_scroll");
    const gallery = document.getElementById('gallery_' + id);
    if (gallery) {
        gallery.classList.add('gallery_active');

        const firstSmallImage = gallery.querySelector('.small_images img');
        if (firstSmallImage) {
            updateGallery(firstSmallImage.src, firstSmallImage);
        }
    }
}

function closeAll() {
    document.body.classList.remove("no_scroll");
    const activeGallery = document.querySelector('.gallery_active');
    if (activeGallery) {
        activeGallery.classList.remove('gallery_active');
    }
}

function updateGallery(imageUrl, selectedImage) {
    const activeGallery = document.querySelector('.gallery_active');
    if (activeGallery) {
        const mainImage = document.getElementById('gallery_display');
        mainImage.src = imageUrl;
        mainImage.style.width = '100%';

        const smallImages = activeGallery.querySelectorAll('.small_images img');
        smallImages.forEach(image => {
            image.classList.remove('selected');
        });

        selectedImage.classList.add('selected');
    }
}

function resetGallery() {
    const activeGallery = document.querySelector('.gallery_active');
    if (activeGallery) {
        const mainImage = document.getElementById('gallery_display');
        const originalImage = mainImage.getAttribute('data-original');
        mainImage.src = originalImage;

        const smallImages = activeGallery.querySelectorAll('.small_images img');
        smallImages.forEach(image => {
            image.classList.remove('selected');
        });

        if (smallImages.length > 0) {
            smallImages[0].classList.add('selected');
        }
    }
}

document.getElementById('gallery_display').addEventListener('click', resetGallery);
document.querySelectorAll('.small_images img').forEach(img => {
    img.addEventListener('click', function () {
        updateGallery(this.src, this);
    });
});

// Gallery Banner

document.querySelectorAll(".item").forEach(img => {
    const originalSrc = img.src;
    const gifSrc = img.getAttribute("data-gif");

    img.addEventListener("mouseenter", () => {
        img.src = gifSrc;
    });

    img.addEventListener("mouseleave", () => {
        img.src = "";
        setTimeout(() => {
            img.src = originalSrc;
        }, 10);
    });
});