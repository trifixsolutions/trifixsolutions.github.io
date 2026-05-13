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
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
    
    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
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
    
    // Form submission handler with AJAX
    const contactFormContainer = document.querySelector('.contact-form-container');
    const contactForm = document.getElementById('contactForm');

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Transform URL for FormSubmit AJAX
            const action = form.getAttribute('action');
            if (!action) return;
            const ajaxUrl = action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

            // Loading state
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;

            try {
                const response = await fetch(ajaxUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    // Success state
                    contactFormContainer.innerHTML = `
                        <div class="status-container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; text-align: center;" tabindex="-1">
                            <div class="service-icon" style="width: 80px; height: 80px; margin-bottom: 24px; flex-shrink: 0;">
                                <i data-lucide="check-circle-2" style="width: 40px; height: 40px;"></i>
                            </div>
                            <h3 class="section-title" style="margin-bottom: 16px; font-size: 2.25rem;">Message Sent!</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 32px; max-width: 380px; font-size: 1.1rem; line-height: 1.6;">
                                Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
                            </p>
                            <button id="sendAnother" class="btn btn-primary btn-lg">Send Another Message</button>
                        </div>
                    `;

                    lucide.createIcons();
                    const statusContainer = contactFormContainer.querySelector('.status-container');
                    statusContainer.focus();

                    document.getElementById('sendAnother').addEventListener('click', () => {
                        location.reload(); // Simplest way to restore the form state and GSAP triggers
                    });
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);

                // Error state - provide feedback and restore button
                let errorMsg = form.querySelector('.form-error-msg');
                if (!errorMsg) {
                    errorMsg = document.createElement('p');
                    errorMsg.className = 'form-error-msg';
                    errorMsg.style.color = '#ef4444';
                    errorMsg.style.fontSize = '0.875rem';
                    errorMsg.style.marginTop = '10px';
                    errorMsg.setAttribute('aria-live', 'polite');
                    form.appendChild(errorMsg);
                }
                errorMsg.textContent = 'Something went wrong. Please try again or contact us directly.';

                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                lucide.createIcons();
            }
        });
    }

    if (contactForm) {
        initContactForm();
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
