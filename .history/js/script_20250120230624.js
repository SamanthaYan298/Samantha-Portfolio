// buttons effect

const button = document.querySelector('.btn-follow');

button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left; // X coordinate within the button
    const y = e.clientY - rect.top;  // Y coordinate within the button

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
});

button.addEventListener('mouseleave', () => {
    button.style.setProperty('--x', `50%`);
    button.style.setProperty('--y', `50%`);
});
