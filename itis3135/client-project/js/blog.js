// Blog page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.querySelector('.search-widget input');
    const searchButton = document.querySelector('.search-widget button');
    const blogPosts = document.querySelectorAll('.blog-post');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        blogPosts.forEach((post) => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const content = post.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Category filtering
    const categoryLinks = document.querySelectorAll('.categories-widget a');
    
    categoryLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.textContent.split(' ')[0].toLowerCase();
            
            blogPosts.forEach((post) => {
                const postCategory = post.querySelector('.category').textContent.toLowerCase();
                if (category === postCategory || category === 'all') {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});
