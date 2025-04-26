// Initialize flatpickr calendar
const calendar = flatpickr("#date", {
    enableTime: false,
    dateFormat: "Y-m-d",
    minDate: "today",
    disable: [
        function(date) {
            // Disable Sundays
            return date.getDay() === 0;
        }
    ],
    // Example of some dates marked as booked
    disable: [
        "2025-05-01",
        "2025-05-15",
        "2025-05-30"
    ],
    onChange: function(selectedDates, dateStr, instance) {
        updateTimeSlots(dateStr);
    }
});

// Update available time slots based on selected date
function updateTimeSlots(selectedDate) {
    const timeSelect = document.getElementById('time');
    const date = new Date(selectedDate);
    
    // Clear existing options except the first one
    while (timeSelect.options.length > 1) {
        timeSelect.remove(1);
    }

    // Example of available time slots (this would typically come from a backend)
    const availableSlots = {
        morning: true,
        afternoon: true,
        evening: true
    };

    // Add available time slots
    if (availableSlots.morning) {
        addTimeOption(timeSelect, 'morning', 'Morning (9:00 AM - 12:00 PM)');
    }
    if (availableSlots.afternoon) {
        addTimeOption(timeSelect, 'afternoon', 'Afternoon (1:00 PM - 4:00 PM)');
    }
    if (availableSlots.evening) {
        addTimeOption(timeSelect, 'evening', 'Evening (5:00 PM - 8:00 PM)');
    }
}

function addTimeOption(select, value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.text = text;
    select.add(option);
}

// Form submission handling
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(bookingForm);
    const bookingData = Object.fromEntries(formData.entries());
    
    // Here you would typically send this data to a server
    console.log('Booking submitted:', bookingData);
    
    // Show success message
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
    bookingForm.reset();
});

// Pre-select package if coming from services page
window.addEventListener('DOMContentLoaded', () => {
    const selectedPackage = localStorage.getItem('selectedPackage');
    if (selectedPackage) {
        const packageSelect = document.getElementById('package');
        packageSelect.value = selectedPackage;
        localStorage.removeItem('selectedPackage');
    }
});
