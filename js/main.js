document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            mobileToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") {
                return;
            }
            const target = document.querySelector(href);
            if (!target) {
                return;
            }
            e.preventDefault();
            const offset = target.getBoundingClientRect().top + window.scrollY - 74;
            window.scrollTo({ top: offset, behavior: "smooth" });
            if (navLinks) {
                navLinks.classList.remove("active");
            }
            if (mobileToggle) {
                mobileToggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.18 }
        );
        revealEls.forEach((el) => observer.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("visible"));
    }

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
            if (formStatus) formStatus.textContent = "";

            // Simulate async submission
            setTimeout(() => {
                if (formStatus) {
                    formStatus.textContent = "Thanks for reaching out. Trifix Solutions will contact you within 24 hours.";
                }
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1000);
        });
    }
});
