'use strict';

/**
 * Validates the booking form
 * @returns {boolean} True if form is valid, false otherwise
 */
function validateForm() {
    const form = document.getElementById('booking-form');
    if (!form) return true;

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const phoneEl = document.getElementById('phone');
    const serviceEl = document.getElementById('service');
    const dateEl = document.getElementById('date');

    if (!nameEl || !emailEl || !phoneEl || !serviceEl || !dateEl) return true;

    const name = nameEl.value;
    const email = emailEl.value;
    const phone = phoneEl.value;
    const service = serviceEl.value;
    const date = dateEl.value;

    // Basic validation
    if (!name || !email || !phone || !service || !date) {
        window.alert('Please fill in all required fields');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        window.alert('Please enter a valid email address');
        return false;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        window.alert('Please enter a valid 10-digit phone number');
        return false;
    }

    // Date validation
    const selectedDate = new Date(date);
    const today = new Date();
    if (selectedDate < today) {
        window.alert('Please select a future date');
        return false;
    }

    return true;
}

/**
 * Filters gallery items based on category
 * @param {string} category - The category to filter by
 */
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (!galleryItems.length) return;

    galleryItems.forEach((item) => {
        const display = category === 'all' || item.dataset.category === category ? 'block' : 'none';
        item.style.display = display;
    });
}

// Initialize portfolio filters
document.addEventListener('DOMContentLoaded', () => {
    // Initialize date picker
    const dateInput = document.getElementById('date');
    if (dateInput) {
        flatpickr(dateInput, {
            minDate: 'today',
            dateFormat: 'Y-m-d',
            altInput: true,
            altFormat: 'F j, Y',
            disableMobile: false
        });
    }


    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            filterGallery(button.dataset.category);
        });
    });
});

// Initialize smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
