// ===============================================
//    KISIO FRANCIS - PORTFOLIO JAVASCRIPT
// ===============================================

document.addEventListener("DOMContentLoaded", function () {

    // ============= 1. TYPING ANIMATION =============
    const typedText = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");

    const words = ["Web Developer", "UI-UX Designer", "Digital Marketer", "Creative Thinker"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 70 : 110;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typedText) setTimeout(type, 800);


    // ============= 2. NAVBAR SCROLL EFFECT =============
    const navbar = document.querySelector(".navbar");

    function handleScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();


    // ============= 3. ACTIVE MENU HIGHLIGHT ON SCROLL =============
    const navLinks = document.querySelectorAll(".nav-menu a");

    function highlightMenu() {
        let scrollPos = window.scrollY + 120;

        document.querySelectorAll("section[id]").forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightMenu);
    highlightMenu();


    // ============= 4. MOBILE HAMBURGER MENU =============
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }


    // ============= 5. TAB SWITCHING (ABOUT SECTION) =============
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });


    // ============= 6. TESTIMONIALS CAROUSEL =============
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let current = 0;

    function showTestimonial(index) {
        testimonials.forEach((t, i) => {
            t.classList.toggle('active', i === index);
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % testimonials.length;
            showTestimonial(current);
        });
        
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + testimonials.length) % testimonials.length;
            showTestimonial(current);
        });

        setInterval(() => {
            current = (current + 1) % testimonials.length;
            showTestimonial(current);
        }, 6000);
    }


    // ============= 7. CONTACT FORM =============
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const msg = document.getElementById('formMessage');
            msg.innerHTML = 'Sending your message...';
            msg.className = 'form-message';
            
            setTimeout(() => {
                msg.innerHTML = 'Message sent successfully! I\'ll reply within 24 hours.';
                msg.className = 'form-message success';
                this.reset();
            }, 800);
        });
    }


    // ============= 8. AUTO-UPDATE COPYRIGHT YEAR =============
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ============= 9. ANIMATE SKILL BARS =============
    const skillBars = document.querySelectorAll('.fill');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && !bar.classList.contains('animated')) {
                bar.classList.add('animated');
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills();


    // ============= 10. SMOOTH SCROLL =============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

});
