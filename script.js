document.addEventListener('DOMContentLoaded', () => {
    // Carousel scroll logic
    const setupCarousel = (wrapperId) => {
        const carousel = document.getElementById(wrapperId);
        if (!carousel) return;
        
        const prevBtn = carousel.parentElement.querySelector('.prev-btn');
        const nextBtn = carousel.parentElement.querySelector('.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -300, behavior: 'smooth' });
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    };

    setupCarousel('prod-carousel');
    setupCarousel('appt-carousel');

    // Simple sticky header shadow logic
    const header = document.querySelector('.ecommerce-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
