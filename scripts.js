// Responsive Navigation Menu
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const burger = document.createElement('div');

burger.classList.add('burger');
burger.innerHTML = `
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
`;
nav.appendChild(burger);

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Image Hover Effects
const categories = document.querySelectorAll('.category img');

categories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'scale(1.05)';
    });

    category.addEventListener('mouseleave', () => {
        category.style.transform = 'scale(1)';
    });
});
