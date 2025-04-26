// Initialize lightGallery
const gallery = document.getElementById('lightgallery');
lightGallery(gallery, {
    speed: 500,
    plugins: [lgZoom],
    selector: '.gallery-item'
});

// Gallery filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('filter-btn-active'));
        // Add active class to clicked button
        button.classList.add('filter-btn-active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach((item) => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.classList.add('gallery-item-visible');
            } else {
                item.style.display = 'none';
                item.classList.remove('gallery-item-visible');
            }
        });
    });
});

// Add animation classes for smooth transitions
galleryItems.forEach((item) => {
    item.classList.add('gallery-item-visible');
});
