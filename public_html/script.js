document.addEventListener('DOMContentLoaded', function() {

    // --- Element Selections ---
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links'); // The <ul> element
    const navLinks = document.querySelectorAll('.nav-links a'); // All individual <a> links
    const sections = document.querySelectorAll('section[id]'); // Select only sections that have an ID

    // --- 1. Header Scroll Effect ---
    // Adds a 'scrolled' class to the header when the page is scrolled down.
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // --- 2. Mobile Menu Toggle ---
    // Toggles the 'active' class on the navigation menu to show/hide it.
    function initMenuToggle() {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close the mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // --- 3. Active Nav Link Highlighting on Scroll (Scroll-Spy) ---
    // Uses IntersectionObserver to detect which section is in view.
    function initScrollSpy() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Remove 'active' from all links
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Add 'active' to the link corresponding to the visible section
                    const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.5, // Trigger when 50% of the section is visible
            rootMargin: '-50px 0px -50px 0px' // Adjusts the observer's bounding box
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // --- Initialize all features ---
    window.addEventListener('scroll', handleHeaderScroll);
    initMenuToggle();
    initScrollSpy();

});
