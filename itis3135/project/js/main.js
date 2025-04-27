// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    initializeFilters();
    initializeMobileMenu();
});

// Form handling
function initializeForm() {
    var form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your booking request! We will contact you soon.');
            form.reset();
        });
    }
}

// Portfolio filters
function initializeFilters() {
    var filters = document.querySelectorAll('.filter-btn');
    if (filters.length) {
        filters.forEach(function(button) {
            button.addEventListener('click', function() {
                var category = this.getAttribute('data-category');
                updateFilters(filters, category);
                filterGallery(category);
            });
        });
    }
}

function updateFilters(filters, activeCategory) {
    filters.forEach(function(btn) {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === activeCategory) {
            btn.classList.add('active');
        }
    });
}

function filterGallery(category) {
    var items = document.querySelectorAll('.gallery-item');
    items.forEach(function(item) {
        var itemCategory = item.getAttribute('data-category');
        item.style.display = 
            category === 'all' || category === itemCategory ? 'block' : 'none';
    });
}

// Mobile menu
function initializeMobileMenu() {
    var menuButton = document.getElementById('menuToggle');
    var nav = document.querySelector('.nav-list');
    
    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            nav.classList.toggle('show');
            var isExpanded = nav.classList.contains('show');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });
    }
}

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