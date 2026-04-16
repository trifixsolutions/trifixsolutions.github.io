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
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Loading state
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    contactForm.style.display = 'none';
                    formStatus.innerHTML = `
                        <div style="text-align: center; padding: 40px 0;" tabindex="-1" id="successMessage">
                            <div style="width: 64px; height: 64px; background: rgba(0, 212, 255, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                                <i data-lucide="check-circle" style="color: var(--accent-primary); width: 32px; height: 32px;"></i>
                            </div>
                            <h3 style="font-family: var(--font-primary); font-size: 1.5rem; margin-bottom: 10px;">Message Sent!</h3>
                            <p style="color: var(--text-secondary); margin-bottom: 30px;">Thank you for your inquiry. We'll get back to you soon.</p>
                            <button type="button" id="sendAnother" class="btn btn-outline" style="margin: 0 auto;">Send Another</button>
                        </div>
                    `;
                    lucide.createIcons();
                    document.getElementById('successMessage').focus();

                    document.getElementById('sendAnother').addEventListener('click', () => {
                        contactForm.reset();
                        contactForm.style.display = 'flex';
                        formStatus.innerHTML = '';
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        lucide.createIcons();
                        setTimeout(() => {
                            contactForm.querySelector('input').focus();
                        }, 0);
                    });
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                formStatus.innerHTML = `
                    <div style="padding: 15px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); border-radius: 10px; color: #ef4444; margin-bottom: 20px; font-size: 0.875rem; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="alert-circle" style="width: 18px; height: 18px;"></i>
                        <span>Something went wrong. Please try again.</span>
                    </div>
                `;
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
