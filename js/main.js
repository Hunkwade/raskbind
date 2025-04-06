document.addEventListener('DOMContentLoaded', function () {
    // Category text animation
    const categories = ['Coffee', 'Tech', 'Fashion', 'Real Estate', 'Health', 'Water'];
    const categoryTextElement = document.querySelector('.category-text');
    let currentIndex = 0;

    categoryTextElement.style.transition = 'opacity 0.5s ease-in-out';

    function animateCategory() {
        // Fade out
        categoryTextElement.style.opacity = '0';

        setTimeout(() => {
            // Change text
            categoryTextElement.textContent = categories[currentIndex];

            // Fade in
            categoryTextElement.style.opacity = '1';

            // Increment index with looping
            currentIndex = (currentIndex + 1) % categories.length;
        }, 500); // Half of the total animation time
    }

    // Start animation without showing the first text twice
    animateCategory(); // Initial animation start
    setInterval(animateCategory, 3000); // Loop every 3 seconds

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const body = document.body;

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileToggle.classList.toggle('active');
            nav.classList.toggle('active');
            header.classList.toggle('mobile-active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking anywhere outside the menu
        document.addEventListener('click', function (e) {
            if (nav.classList.contains('active') && !nav.contains(e.target) && e.target !== mobileToggle) {
                mobileToggle.classList.remove('active');
                nav.classList.remove('active');
                header.classList.remove('mobile-active');
                body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking on navigation links on mobile
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (nav.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    nav.classList.remove('active');
                    header.classList.remove('mobile-active');
                    body.classList.remove('menu-open');
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // Form submission
    const contactForm = document.querySelector('#contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill all required fields.');
                return;
            }

            // For demo: show success message
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Company card hover effects
    const companyCards = document.querySelectorAll('.company-card');

    companyCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
        });
    });

    // Responsive behavior check
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
            header.classList.remove('mobile-active');
            body.classList.remove('menu-open');
        } else {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
            header.classList.remove('mobile-active');
            body.classList.remove('menu-open');
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Initial check
});