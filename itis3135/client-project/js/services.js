// Package selection handling
const packageButtons = document.querySelectorAll('.select-package');

packageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedPackage = button.getAttribute('data-package');
        localStorage.setItem('selectedPackage', selectedPackage);
        window.location.href = 'booking.html';
    });
});

// Package comparison hover effects
const packageColumns = document.querySelectorAll('.package-column');

packageColumns.forEach(column => {
    column.addEventListener('mouseenter', () => {
        packageColumns.forEach(col => col.classList.remove('package-column-highlight'));
        column.classList.add('package-column-highlight');
    });

    column.addEventListener('mouseleave', () => {
        column.classList.remove('package-column-highlight');
        // Keep the featured package highlighted
        document.querySelector('.package-column-highlight').classList.add('package-column-highlight');
    });
});

// Initialize with featured package highlighted
document.querySelector('.package-column.featured').classList.add('highlight');
