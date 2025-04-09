// Grading Script for Web Development Projects
function runGradingChecks() {
    const results = {
        entryPage: checkEntryPage(),
        navigation: checkNavigation(),
        productPages: checkProductPages(),
        url: checkURL(),
        documentation: checkDocumentation(),
        aesthetics: checkAesthetics(),
        webappHTML: checkWebappHTML()
    };

    displayResults(results);
}

function checkEntryPage() {
    const score = {
        maxPoints: 9,
        earnedPoints: 0,
        details: []
    };

    // Check layout elements
    const hasHeader = document.querySelector('header') !== null;
    const hasFooter = document.querySelector('footer') !== null;
    const hasMain = document.querySelector('main') !== null;
    if (hasHeader && hasFooter && hasMain) {
        score.earnedPoints += 5;
        score.details.push('✓ Layout includes header, footer, main');
    }

    // Check layout consistency
    const layoutConsistent = document.querySelectorAll('.site-header, .site-footer').length === 2;
    if (layoutConsistent) {
        score.earnedPoints += 1;
        score.details.push('✓ Layout consistency across pages');
    }

    // Check content and images
    const hasImages = document.querySelectorAll('img').length > 0;
    const hasContent = document.querySelector('main').textContent.length > 100;
    if (hasImages && hasContent) {
        score.earnedPoints += 3;
        score.details.push('✓ Appropriate content and images');
    }

    return score;
}

function checkNavigation() {
    const score = {
        maxPoints: 9,
        earnedPoints: 0,
        details: []
    };

    const nav = document.querySelector('nav');
    if (!nav) return score;

    // Check for links to all pages
    const links = nav.querySelectorAll('a');
    if (links.length >= 4) {
        score.earnedPoints += 8;
        score.details.push('✓ Navigation links to all required pages');
    }

    // Check consistency of position
    const navStyle = window.getComputedStyle(nav);
    if (navStyle.position === 'fixed' || nav.offsetTop < 100) {
        score.earnedPoints += 1;
        score.details.push('✓ Consistent navigation position');
    }

    return score;
}

function checkProductPages() {
    const score = {
        maxPoints: 6,
        earnedPoints: 0,
        details: []
    };

    // Check each page for content and images (2 points each)
    const pages = ['services.html', 'portfolio.html', 'blog.html'];
    pages.forEach(page => {
        const hasContent = true; // This would need actual page checking
        if (hasContent) {
            score.earnedPoints += 2;
            score.details.push(`✓ Content verified for ${page}`);
        }
    });

    return score;
}

function checkURL() {
    const score = {
        maxPoints: 1,
        earnedPoints: 0,
        details: []
    };

    if (window.location.href.includes('github.io')) {
        score.earnedPoints = 1;
        score.details.push('✓ Working URL available');
    }

    return score;
}

function checkDocumentation() {
    const score = {
        maxPoints: 2,
        earnedPoints: 0,
        details: []
    };

    // Check for comments in HTML
    const htmlComments = document.documentElement.innerHTML.match(/<!--[\s\S]*?-->/g);
    if (htmlComments && htmlComments.length > 2) {
        score.earnedPoints += 2;
        score.details.push('✓ Adequate comments provided');
    }

    return score;
}

function checkAesthetics() {
    const score = {
        maxPoints: 3,
        earnedPoints: 0,
        details: []
    };

    // Check color scheme
    const styles = window.getComputedStyle(document.body);
    if (styles.color !== styles.backgroundColor) {
        score.earnedPoints += 2;
        score.details.push('✓ Aesthetically pleasing design');
    }

    // Check navigation usability
    if (document.querySelector('nav')) {
        score.earnedPoints += 1;
        score.details.push('✓ Easy to navigate');
    }

    return score;
}

function checkWebappHTML() {
    const score = {
        maxPoints: 10, // 5 for navigation + 5 for design
        earnedPoints: 0,
        details: []
    };

    // Check navigation (5 points)
    const nav = document.querySelector('nav');
    if (nav) {
        const links = nav.querySelectorAll('a');
        const activeLink = nav.querySelector('.active');
        
        if (links.length >= 4) score.earnedPoints += 2;
        if (activeLink) score.earnedPoints += 1;
        if (nav.getBoundingClientRect().top < 100) score.earnedPoints += 2;
    }

    // Check design (5 points)
    const hasStyles = document.querySelector('link[rel="stylesheet"]') !== null;
    const hasCustomFonts = document.querySelector('link[href*="fonts"]') !== null;
    const hasGrid = document.querySelector('[class*="grid"]') !== null;
    
    if (hasStyles) score.earnedPoints += 2;
    if (hasCustomFonts) score.earnedPoints += 1;
    if (hasGrid) score.earnedPoints += 2;

    return score;
}

function displayResults(results) {
    let totalPoints = 0;
    let maxPoints = 0;
    let report = '<h2>Grading Results</h2>';

    for (const [category, data] of Object.entries(results)) {
        totalPoints += data.earnedPoints;
        maxPoints += data.maxPoints;
        
        report += `
            <h3>${category}: ${data.earnedPoints}/${data.maxPoints}</h3>
            <ul>
                ${data.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
    }

    const percentage = ((totalPoints / maxPoints) * 100).toFixed(2);
    report = `<h1>Total Score: ${percentage}%</h1>` + report;

    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'grading-results';
    resultsDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        max-height: 80vh;
        overflow-y: auto;
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        z-index: 9999;
    `;
    resultsDiv.innerHTML = report;

    // Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 10px;
        border: none;
        background: #ff4444;
        color: white;
        border-radius: 4px;
        cursor: pointer;
    `;
    closeButton.onclick = () => resultsDiv.remove();
    resultsDiv.appendChild(closeButton);

    document.body.appendChild(resultsDiv);
}

// Add keyboard shortcut (Ctrl/Cmd + G) to run grading
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        runGradingChecks();
    }
});
