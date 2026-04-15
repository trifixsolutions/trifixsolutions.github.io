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
    
    // Form submission feedback
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formContainer = contactForm.parentElement;
        const originalFormHTML = formContainer.innerHTML;

        // Use delegation for the reset button since we'll replace the innerHTML
        formContainer.addEventListener('click', (e) => {
            if (e.target && e.target.id === 'resetForm') {
                e.preventDefault();
                formContainer.innerHTML = originalFormHTML;
                lucide.createIcons();
                // We need to re-bind the submit listener or use delegation
                // Re-initializing the whole block is cleaner if we move the logic into a function
                initContactForm();
            }
        });

        function initContactForm() {
            const currentForm = document.getElementById('contactForm');
            if (!currentForm) return;

            currentForm.addEventListener('submit', async (e) => {
                e.preventDefault();

                const submitBtn = currentForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;

                // Remove existing error message if any
                const existingError = currentForm.querySelector('.error-feedback');
                if (existingError) existingError.remove();

                submitBtn.innerHTML = '<span>Sending...</span>';
                submitBtn.disabled = true;

                try {
                    const formData = new FormData(currentForm);
                    const response = await fetch(currentForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        formContainer.innerHTML = `
                            <div class="success-message" style="text-align: center; padding: 30px 0;">
                                <div style="display: inline-flex; align-items: center; justify-content: center; width: 80px; height: 80px; background: rgba(37, 211, 102, 0.1); border-radius: 20px; margin-bottom: 30px;">
                                    <i data-lucide="check-circle" style="color: #25d366; width: 40px; height: 40px;"></i>
                                </div>
                                <h2 style="font-family: var(--font-primary); font-size: 2.25rem; font-weight: 800; margin-bottom: 15px; color: var(--text-primary);">Message Sent!</h2>
                                <p style="color: var(--text-secondary); margin: 0 auto 35px; max-width: 380px; font-size: 1.1rem; line-height: 1.6;">
                                    Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
                                </p>
                                <button id="resetForm" class="btn btn-outline btn-sm">
                                    <i data-lucide="refresh-cw" style="width: 16px; height: 16px;"></i>
                                    Send Another Message
                                </button>
                            </div>
                        `;
                        lucide.createIcons();
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    lucide.createIcons();

                    const errorMsg = document.createElement('p');
                    errorMsg.className = 'error-feedback';
                    errorMsg.style.color = '#ef4444';
                    errorMsg.style.marginTop = '15px';
                    errorMsg.style.fontSize = '0.875rem';
                    errorMsg.textContent = 'Something went wrong. Please try again or call us directly.';
                    currentForm.appendChild(errorMsg);
                }
            });
        }

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
