// Main JavaScript file
"use strict";

// Initialize all functions after DOM loads
function initializePage() {
    setupForm();
    setupGallery();
    setupMobileMenu();
}

// Form setup and validation
function setupForm() {
    var bookingForm = document.getElementById("bookingForm");
    
    if (bookingForm) {
        bookingForm.onsubmit = function(event) {
            event.preventDefault();
            handleFormSubmit(bookingForm);
        };
    }
}

// Handle form submission
function handleFormSubmit(form) {
    var formData = new FormData(form);
    var message = "Thank you for your booking request!";
    alert(message);
    form.reset();
}

// Gallery filtering
function setupGallery() {
    var filterButtons = document.getElementsByClassName("filter-button");
    
    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].onclick = function() {
            var category = this.getAttribute("data-category");
            handleFilter(category, filterButtons);
        };
    }
}

// Handle gallery filtering
function handleFilter(category, buttons) {
    // Update active button
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        if (buttons[i].getAttribute("data-category") === category) {
            buttons[i].classList.add("active");
        }
    }
    
    // Filter gallery items
    var items = document.getElementsByClassName("gallery-item");
    for (var j = 0; j < items.length; j++) {
        var item = items[j];
        if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}

// Mobile menu setup
function setupMobileMenu() {
    var menuButton = document.getElementById("menuToggle");
    var menu = document.getElementById("navList");
    
    if (menuButton && menu) {
        menuButton.onclick = function() {
            menu.classList.toggle("show");
        };
    }
}

// Add event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", initializePage); 