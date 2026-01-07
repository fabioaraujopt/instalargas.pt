/*=============== SHOW/HIDE MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Simple fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service__card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Observe features
document.querySelectorAll('.feature').forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-30px)';
    feature.style.transition = 'all 0.6s ease';
    observer.observe(feature);
});

// Observe contact cards
document.querySelectorAll('.contact__card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Simulate form submission
        // In production, this would send data to a server
        console.log('Form submitted:', formData);

        // Show success message
        showFormMessage('Mensagem enviada com sucesso! Entraremos em contacto em breve.', 'success');

        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            hideFormMessage();
        }, 5000);
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form__message ${type}`;
        formMessage.style.display = 'block';
    }
}

function hideFormMessage() {
    if (formMessage) {
        formMessage.style.display = 'none';
    }
}

/*=============== SMOOTH SCROLL ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for hash links
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/*=============== TYPING EFFECT FOR HOME TITLE (Optional Enhancement) ===============*/
const homeTitle = document.querySelector('.home__title-highlight');
if (homeTitle) {
    const text = homeTitle.textContent;
    homeTitle.textContent = '';
    homeTitle.style.opacity = '1';
    
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < text.length) {
            homeTitle.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(() => {
        typeWriter();
    }, 500);
}

/*=============== ANIMATED STATISTICS COUNTER ===============*/
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isPercentage = element.textContent.includes('%');
    const hasPlus = element.textContent.includes('+');
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            if (isPercentage) {
                element.textContent = Math.floor(start) + '%';
            } else if (hasPlus) {
                element.textContent = '+' + Math.floor(start);
            } else {
                element.textContent = Math.floor(start);
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (isPercentage) {
                element.textContent = target + '%';
            } else if (hasPlus) {
                element.textContent = '+' + target;
            } else {
                element.textContent = target;
            }
        }
    }
    updateCounter();
}

// Observe and animate statistics when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('.home__stat-number');
            if (statNumber) {
                entry.target.classList.add('animated');
                const text = statNumber.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                animateCounter(statNumber, number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.home__stat').forEach(stat => {
    statsObserver.observe(stat);
});

/*=============== FORM VALIDATION ===============*/
const formInputs = document.querySelectorAll('.form__input');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateInput(this);
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('invalid')) {
            validateInput(this);
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();
    
    // Remove previous error states
    input.classList.remove('invalid');
    removeErrorMessage(input);
    
    // Check if required field is empty
    if (input.hasAttribute('required') && !value) {
        showError(input, 'Este campo é obrigatório');
        return false;
    }
    
    // Validate email
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(input, 'Por favor, insira um email válido');
            return false;
        }
    }
    
    // Validate phone
    if (input.type === 'tel' && value) {
        const phoneRegex = /^[+]?[\d\s()-]+$/;
        if (!phoneRegex.test(value)) {
            showError(input, 'Por favor, insira um número de telefone válido');
            return false;
        }
    }
    
    return true;
}

function showError(input, message) {
    input.classList.add('invalid');
    
    // Add red border
    input.style.borderColor = '#DC3545';
    
    // Create error message if it doesn't exist
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#DC3545';
        errorDiv.style.fontSize = '0.813rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }
}

function removeErrorMessage(input) {
    input.style.borderColor = '';
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.remove();
    }
}

/*=============== WHATSAPP BUTTON (Optional) ===============*/
// Uncomment and add WhatsApp number to enable floating WhatsApp button
/*
const whatsappBtn = document.createElement('a');
whatsappBtn.href = 'https://wa.me/351XXXXXXXXX';
whatsappBtn.target = '_blank';
whatsappBtn.className = 'whatsapp-button';
whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
whatsappBtn.setAttribute('aria-label', 'Contact via WhatsApp');

// Add styles
const style = document.createElement('style');
style.textContent = `
    .whatsapp-button {
        position: fixed;
        right: 1.5rem;
        bottom: 6rem;
        width: 60px;
        height: 60px;
        background: #25D366;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2rem;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        z-index: 99;
        transition: all 0.3s ease;
        animation: pulse-whatsapp 2s infinite;
    }
    
    .whatsapp-button:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
    }
    
    @keyframes pulse-whatsapp {
        0%, 100% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }
        50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8);
        }
    }
    
    @media screen and (max-width: 768px) {
        .whatsapp-button {
            width: 50px;
            height: 50px;
            font-size: 1.75rem;
        }
    }
`;

document.head.appendChild(style);
document.body.appendChild(whatsappBtn);
*/

/*=============== LOADING ANIMATION ===============*/
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

/*=============== PERFORMANCE OPTIMIZATION ===============*/
// Lazy load images if any are added later
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

/*=============== CONSOLE MESSAGE ===============*/
console.log('%c🔥 InstalarGás', 'color: #FF6B35; font-size: 24px; font-weight: bold;');
console.log('%cWebsite desenvolvido com ❤️', 'color: #004E89; font-size: 14px;');
console.log('%cPara mais informações: geral@instalargas.pt', 'color: #666; font-size: 12px;');

