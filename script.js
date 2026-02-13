// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animation cho hamburger
    menuToggle.classList.toggle('is-active');
});

// Form Submission
document.getElementById('reg-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering! We have sent a confirmation email to you.');
    this.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Đóng menu mobile sau khi click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});