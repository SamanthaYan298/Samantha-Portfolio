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


const viewProject = document.getElementById("message");
const modal = document.getElementById("coming");

viewProject.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex";

    setTimeout(function() {
        modal.style.display = "none";
    }, 3000);
});


// case study

const tabs = document.querySelectorAll('.tab');
    const videoContainer = document.getElementById('videoContainer');
    const textContainer = document.getElementById('textContainer');

    const contentData = {
        chatbot: {
            video: '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="AI Chatbot"></iframe>',
            title: 'AI Chatbot',
            description: 'Chat with the chatbot and navigate challenges with multiple language options through AI-powered legal advice.',
        },
        simplifier: {
            video: '<iframe src="https://www.youtube.com/embed/zXt56MB-3vc" title="Document Simplifier"></iframe>',
            title: 'Document Simplifier',
            description: 'Simplify your documents with AI technology to enhance clarity and save time.',
        },
        support: {
            video: '<iframe src="https://www.youtube.com/embed/ZZ5LpwO-An4" title="Support Group"></iframe>',
            title: 'Support Group',
            description: 'Connect with others and access resources through our dedicated support group.',
        },
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Update active class
            tabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');

            // Update content
            const tabKey = tab.dataset.tab;
            const data = contentData[tabKey];

            videoContainer.innerHTML = data.video;
            textContainer.innerHTML = `<h3>${data.title}</h3><p>${data.description}</p>`;
        });
    });