// Navigation menu toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}
navSlide();

// Typing Effect
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const texts = [
  "Software Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Problem Solver"
];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait 2s before typing next word
        } else {
            setTimeout(type, 100);
        }
    })();
}

// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    const htmlEl = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlEl.setAttribute('data-theme', 'light');
        if (icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        if (htmlEl.getAttribute('data-theme') === 'light') {
            htmlEl.removeAttribute('data-theme');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            htmlEl.setAttribute('data-theme', 'light');
            if (icon) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'light');
        }
    });
}

// Scroll to Top
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Counter Demo (JS Fundamentals)
const counterValue = document.getElementById('counter-value');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

if (counterValue && increaseBtn && decreaseBtn) {
    let countVal = 0;
    increaseBtn.addEventListener('click', () => {
        countVal++;
        counterValue.textContent = countVal;
    });

    decreaseBtn.addEventListener('click', () => {
        countVal--;
        counterValue.textContent = countVal;
    });
}

// Array & Event Demo
const fruitSelect = document.getElementById('fruit-select');
const fruitResult = document.getElementById('fruit-result');

if (fruitSelect && fruitResult) {
    const fruitsArray = ["Apple", "Banana", "Cherry"]; 
    fruitSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            fruitResult.textContent = `You selected: ${e.target.value}. It is at index ${fruitsArray.indexOf(e.target.value)} of the array.`;
        } else {
            fruitResult.textContent = '';
        }
    });
}

// Form Validation Demo
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');

if (contactForm && emailInput && messageInput) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Message validation
        if (messageInput.value.length < 10) {
            messageError.textContent = "Message must be at least 10 characters long.";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        if (isValid) {
            formSuccess.classList.remove('hidden');
            contactForm.reset();
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 5000);
        }
    });

    // Keyup event demo on email field
    emailInput.addEventListener('keyup', () => {
        if (emailInput.value.length > 0) {
            emailError.textContent = "";
        }
    });
}
