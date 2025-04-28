$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    // Show specific slide
    function showSlide(n) {
        slides.removeClass('active-slide');
        currentSlide = (n + totalSlides) % totalSlides;
        slides.eq(currentSlide).addClass('active-slide');
    }

    // Create thumbnails
    slides.each(function(index) {
        const img = $(this).find('img');
        const thumbnail = $('<img>')
            .attr('src', img.attr('src'))
            .attr('alt', img.attr('alt'))
            .addClass('thumbnail')
            .click(function() {
                showSlide(index);
            });
        $('.thumbnail-container').append(thumbnail);
    });

    // Change slide
    window.changeSlide = function(direction) {
        showSlide(currentSlide + direction);
    };

    // Keyboard navigation
    $(document).keydown(function(e) {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    });

    // Auto advance slides every 5 seconds
    setInterval(function() {
        changeSlide(1);
    }, 5000);
});
