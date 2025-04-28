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
        const categories = item.dataset.category.split(' ');
        const display = category === 'all' || categories.includes(category) ? 'block' : 'none';
        item.style.display = display;
    });
}

// Initialize portfolio filters
document.addEventListener('DOMContentLoaded', () => {
    // Initialize date picker with Flatpickr
    const dateInput = document.getElementById('date');
    if (dateInput) {
        flatpickr(dateInput, {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            minDate: "today",
            maxDate: new Date().fp_incr(90), // Allow booking up to 90 days in advance
            disable: ["Sunday"],
            locale: {
                firstDayOfWeek: 1 // Start week on Monday
            },
            use24Hour: false,
            minTime: "09:00",
            maxTime: "17:00",
            minuteIncrement: 30,
            altInput: true,
            altFormat: "F j, Y at h:i K",
            ariaDateFormat: "F j, Y at h:i K",
            disableMobile: true, // Force the native datepicker to be disabled on mobile
            allowInput: true,
            parseDate: (datestr) => {
                return new Date(datestr);
            },
            errorHandler: (error) => {
                console.warn('Flatpickr: ', error);
            }
        });
    }


    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove('filter-btn--active'));
            // Add active class to clicked button
            button.classList.add('filter-btn--active');
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
