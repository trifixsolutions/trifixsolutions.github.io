// Trifix Solutions - Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            // Simple loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Simulate form submission
            setTimeout(() => {
                formStatus.textContent = 'Thank you for your message! We will get back to you within 24 hours.';
                formStatus.className = 'form-status success';
                formStatus.classList.remove('visually-hidden');

                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;

                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('visually-hidden');
                }, 5000);
            }, 800);
        });
    }

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});
