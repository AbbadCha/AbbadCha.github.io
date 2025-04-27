// Mobile Navigation Toggle
const menu = document.querySelector('.menu');
const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';
menuButton.classList.add('menu-button');
menuButton.style.display = 'none';

// Add menu button before the menu
menu.parentNode.insertBefore(menuButton, menu);

// Handle menu toggle on mobile
menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

// Show/hide menu button based on screen size
function handleResize() {
    if (window.innerWidth < 768) {
        menuButton.style.display = 'block';
        menu.classList.remove('menu-open');
    } else {
        menuButton.style.display = 'none';
        menu.classList.remove('menu-open');
    }
}

// Listen for window resize
window.addEventListener('resize', handleResize);

// Initial check
handleResize();
