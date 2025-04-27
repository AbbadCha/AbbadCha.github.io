document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your booking request! We will contact you soon.');
            bookingForm.reset();
        });
    }

    // Portfolio filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Remove active class from all buttons
            filterButtons.forEach((btn) => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');

            // Filter gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach((item) => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            menuToggle.setAttribute('aria-expanded', 
                navLinks.classList.contains('show').toString()
            );
        });
    }

    // Form input validation
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach((input) => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });
});

// Input validation function
function validateInput(input) {
    const isValid = input.checkValidity();
    if (!isValid) {
        input.classList.add('invalid');
        const errorMessage = input.validationMessage;
        showError(input, errorMessage);
    } else {
        input.classList.remove('invalid');
        clearError(input);
    }
}

// Show error message
function showError(input, message) {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.textContent = message;
    } else {
        const newErrorDiv = document.createElement('div');
        newErrorDiv.className = 'error-message';
        newErrorDiv.textContent = message;
        input.parentNode.insertBefore(newErrorDiv, input.nextSibling);
    }
}

// Clear error message
function clearError(input) {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.remove();
    }
} 