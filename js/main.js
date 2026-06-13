// ========================================
// TRIFIX SOLUTIONS - Main JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    const toggleMenu = (forceClose = false) => {
        const isOpen = forceClose ? false : !navLinks.classList.contains('active');
        navLinks.classList.toggle('active', isOpen);

        // Update ARIA attributes
        navToggle.setAttribute('aria-expanded', isOpen);
        navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

        // Update Icon
        const icon = navToggle.querySelector('[data-lucide]');
        if (icon) {
            icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
            lucide.createIcons();
        }
    };

    navToggle.addEventListener('click', () => toggleMenu());
    
    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });
    
    // Smooth scroll for anchor links
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
            }
        });
    });
    
    // Hero animations
    gsap.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2
    });
    
    gsap.from('.hero-title .line', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.4
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8
    });
    
    gsap.from('.hero-cta .btn', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        delay: 1
    });
    
    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        
        gsap.to(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%'
            },
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            delay: 0.5
        });
    });
    
    // Service cards animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (i % 3) * 0.1
        });
    });
    
    // About section animation
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 60%'
        },
        opacity: 0,
        x: -50,
        duration: 1
    });
    
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 60%'
        },
        opacity: 0,
        x: 50,
        duration: 1
    });
    
    // Contact channels animation
    gsap.utils.toArray('.channel-item').forEach((item, i) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: i * 0.1
        });
    });
    
    // Create floating particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${Math.random() > 0.5 ? 'rgba(0, 212, 255, 0.5)' : 'rgba(139, 92, 246, 0.5)'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);
        
        gsap.to(particle, {
            y: -Math.random() * 200 - 100,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration: Math.random() * 5 + 5,
            repeat: -1,
            delay: Math.random() * 5
        });
    }
    
    // Form submission feedback (AJAX)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            const formData = new FormData(contactForm);
            const formAction = contactForm.getAttribute('action');
            const ajaxAction = formAction.replace('formsubmit.co/', 'formsubmit.co/ajax/');

            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch(ajaxAction, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(Object.fromEntries(formData))
                });

                if (response.ok) {
                    const container = contactForm.parentElement;
                    container.style.transition = 'opacity 0.3s ease';
                    container.style.opacity = '0';

                    setTimeout(() => {
                        container.innerHTML = `
                            <div class="success-message" style="text-align: center; padding: 40px 20px;" aria-live="polite" tabindex="-1" id="successMessage">
                                <div class="service-icon" style="margin: 0 auto 20px; background: rgba(37, 211, 102, 0.1);">
                                    <i data-lucide="check-circle-2" style="color: #25d366;" aria-hidden="true"></i>
                                </div>
                                <h3 class="section-title" style="font-size: 1.75rem; margin-bottom: 10px;">Message Sent!</h3>
                                <p style="color: var(--text-secondary); margin-bottom: 30px;">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                <button class="btn btn-primary btn-lg" onclick="location.reload()">
                                    Send Another Message
                                </button>
                            </div>
                        `;
                        lucide.createIcons();
                        container.style.opacity = '1';
                        document.getElementById('successMessage').focus();
                    }, 300);
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                const errorMsg = document.createElement('div');
                errorMsg.style.cssText = 'background:rgba(239,68,68,0.1);color:#ef4444;padding:15px;border-radius:10px;margin-bottom:20px;font-size:0.875rem;text-align:center;';
                errorMsg.setAttribute('aria-live', 'polite');
                errorMsg.textContent = 'Oops! Something went wrong. Please try again or call us directly.';

                const existingError = contactForm.querySelector('.error-message');
                if (existingError) existingError.remove();

                errorMsg.classList.add('error-message');
                contactForm.prepend(errorMsg);

                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                lucide.createIcons();
            }
        });
    }
    
    // Parallax effect on hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
    
    console.log('🚀 Trifix Solutions website loaded');
});
