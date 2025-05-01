// Load HTML Components
document.addEventListener('DOMContentLoaded', function() {
    // Load all elements with data-component attribute
    document.querySelectorAll('[data-component]').forEach((element) => {
        const component = element.getAttribute('data-component');
        fetch(`components/${component}.html`)
            .then((response) => response.text())
            .then((html) => {
                element.innerHTML = html;
            })
            .catch((error) => console.error('Error loading component:', error));
    });
});
