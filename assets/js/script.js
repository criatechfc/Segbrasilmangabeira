// Mobile menu toggle
const mobileMenuIcon = document.getElementById('mobileMenuIcon');
const navLinks = document.getElementById('navLinks');

mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuIcon.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuIcon.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Carousel Logic
const track = document.getElementById('carouselTrack');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

if (track && nextButton && prevButton) {
    let index = 0;
    const slides = Array.from(track.children);
    
    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    // Auto-resize update
    window.addEventListener('resize', updateCarousel);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-up').forEach(el => {
    observer.observe(el);
});
