document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Reusable Header and Footer Injection (Optional, if we want to mimic components)
// For now, we'll keep it simple and just use this for behaviors. 
// If we had a lot of pages, we might fetch a header.html, but sticking to standard static HTML 
// for simplicity and SEO visibility without JS for this level of request is often better unless specified otherwise.
